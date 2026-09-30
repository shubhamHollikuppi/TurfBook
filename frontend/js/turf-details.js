// ===================================================
// Turf Details & Slot Selection Logic (turf-details.js)
// ===================================================
// Generates hourly operational slots (06:00 AM - 10:00 PM),
// checks backend availability, and handles slot selection.

let currentTurf = null;
let selectedSlot = null;

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const turfId = urlParams.get('id');

  if (!turfId) {
    window.location.href = '/turfs.html';
    return;
  }

  // Setup Date picker default (Today) and min constraint
  const dateInput = document.getElementById('booking-date');
  const today = new Date().toISOString().split('T')[0];
  if (dateInput) {
    dateInput.min = today;
    dateInput.value = today;
    dateInput.addEventListener('change', () => {
      selectedSlot = null;
      updateBookButtonState();
      loadSlotAvailability(turfId, dateInput.value);
    });
  }

  // Load Turf details
  await loadTurfDetails(turfId);
  if (dateInput) {
    await loadSlotAvailability(turfId, dateInput.value);
  }

  // Book button click listener
  const bookBtn = document.getElementById('proceed-book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', handleProceedToBooking);
  }
});

async function loadTurfDetails(turfId) {
  try {
    const res = await api.get('/turfs/' + turfId);
    currentTurf = res.data;

    // Render details
    document.title = `${currentTurf.name} — TurfBook Lite`;
    document.getElementById('turf-name').textContent = currentTurf.name;
    document.getElementById('turf-location').textContent = `📍 ${currentTurf.address}, ${currentTurf.area}, ${currentTurf.city}`;
    document.getElementById('turf-sport').textContent = currentTurf.sport;
    document.getElementById('turf-price').textContent = formatCurrency(currentTurf.pricePerHour);
    document.getElementById('turf-desc').textContent = currentTurf.description;

    const bannerImg = document.getElementById('turf-banner-img');
    if (bannerImg) {
      bannerImg.src = currentTurf.image || 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80';
      bannerImg.alt = `${currentTurf.name} sports turf`;
    }

    // Facilities list
    const facContainer = document.getElementById('facilities-list');
    if (facContainer) {
      if (currentTurf.facilities && currentTurf.facilities.length > 0) {
        facContainer.innerHTML = currentTurf.facilities
          .map((f) => `<div class="facility-item"><span class="facility-check">✓</span> ${escapeHtml(f)}</div>`)
          .join('');
      } else {
        facContainer.innerHTML = '<p class="text-muted">Standard sports facilities available.</p>';
      }
    }
  } catch (error) {
    alert('Unable to load turf details. Returning to turf listing.');
    window.location.href = '/turfs.html';
  }
}

// Generate operational slots from 06:00 to 22:00 (16 hourly slots)
function generateOperatingSlots() {
  const slots = [];
  for (let hour = 6; hour < 22; hour++) {
    const startHourStr = hour < 10 ? '0' + hour : '' + hour;
    const endHour = hour + 1;
    const endHourStr = endHour < 10 ? '0' + endHour : '' + endHour;

    // 12-hour format label
    const format12 = (h) => {
      const period = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 === 0 ? 12 : h % 12;
      return `${h12 < 10 ? '0' + h12 : h12}:00 ${period}`;
    };

    slots.push({
      startTime: `${startHourStr}:00`,
      endTime: `${endHourStr}:00`,
      displayTime: `${format12(hour)} – ${format12(endHour)}`
    });
  }
  return slots;
}

async function loadSlotAvailability(turfId, date) {
  const container = document.getElementById('slots-grid');
  if (!container) return;

  container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--muted); font-size: 0.85rem;">Checking available slots...</p>';

  try {
    const res = await api.get(`/bookings/availability?turfId=${turfId}&date=${date}`);
    const bookedSlots = res.data.bookedSlots || []; // e.g. ["18:00", "19:00"]

    const allSlots = generateOperatingSlots();
    const now = new Date();
    const isToday = date === now.toISOString().split('T')[0];

    container.innerHTML = '';

    allSlots.forEach((slot) => {
      // Check if slot has already passed today
      let isPast = false;
      if (isToday) {
        const slotDate = new Date(`${date}T${slot.startTime}:00`);
        if (slotDate <= now) {
          isPast = true;
        }
      }

      const isBooked = bookedSlots.includes(slot.startTime) || isPast;

      const slotEl = document.createElement('div');
      slotEl.className = `slot-pill ${isBooked ? 'booked' : ''}`;
      slotEl.innerHTML = `
        <span class="slot-time">${slot.displayTime}</span>
        <span class="slot-status">${isBooked ? 'Booked' : 'Available'}</span>
      `;

      if (!isBooked) {
        slotEl.addEventListener('click', () => {
          document.querySelectorAll('.slot-pill').forEach((el) => el.classList.remove('selected'));
          slotEl.classList.add('selected');
          selectedSlot = slot;
          updateBookButtonState();
        });
      }

      container.appendChild(slotEl);
    });
  } catch (error) {
    container.innerHTML = '<p style="grid-column: 1 / -1; color: var(--error); font-size: 0.85rem;">Unable to load time slots.</p>';
  }
}

function updateBookButtonState() {
  const bookBtn = document.getElementById('proceed-book-btn');
  if (!bookBtn) return;
  if (selectedSlot) {
    bookBtn.disabled = false;
    bookBtn.textContent = 'Book Selected Slot';
  } else {
    bookBtn.disabled = true;
    bookBtn.textContent = 'Select a Time Slot';
  }
}

function handleProceedToBooking() {
  if (!selectedSlot || !currentTurf) return;

  const user = api.getUser();
  if (!user) {
    // Redirect to login with return path
    const returnUrl = encodeURIComponent(window.location.href);
    window.location.href = `/login.html?redirect=${returnUrl}`;
    return;
  }

  if (user.role === 'owner') {
    alert('Turf owners cannot book turfs. Please login with a Player account.');
    return;
  }

  const dateInput = document.getElementById('booking-date');
  const date = dateInput.value;

  // Redirect to booking summary
  const params = new URLSearchParams({
    turfId: currentTurf._id,
    date: date,
    startTime: selectedSlot.startTime,
    endTime: selectedSlot.endTime,
    displayTime: selectedSlot.displayTime
  });

  window.location.href = `/booking.html?${params.toString()}`;
}
