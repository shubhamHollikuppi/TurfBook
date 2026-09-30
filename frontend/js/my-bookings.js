// ===================================================
// My Bookings Management (my-bookings.js)
// ===================================================
// Displays logged-in player's reservations categorized into
// Upcoming, Completed, and Cancelled with cancellation support.

let allBookings = [];
let activeTab = 'upcoming';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('my-bookings-container');
  if (!container) return;

  const user = auth.requireAuth('player');
  if (!user) return;

  setupTabs();
  await loadMyBookings();
});

function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.tab;
      renderBookings();
    });
  });
}

async function loadMyBookings() {
  const container = document.getElementById('my-bookings-container');
  container.innerHTML = '<div class="empty-state"><p>Loading your bookings...</p></div>';

  try {
    const res = await api.get('/bookings/my');
    allBookings = res.data || [];
    renderBookings();
  } catch (error) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Unable to load bookings</h3>
        <p>${escapeHtml(error.message)}</p>
      </div>
    `;
  }
}

function renderBookings() {
  const container = document.getElementById('my-bookings-container');
  if (!container) return;

  const now = new Date();

  // Filter according to active tab
  const filtered = allBookings.filter((b) => {
    if (activeTab === 'cancelled') {
      return b.status === 'CANCELLED';
    }
    if (activeTab === 'completed') {
      return b.status === 'COMPLETED';
    }
    // upcoming: CONFIRMED and slot is not in the past
    if (activeTab === 'upcoming') {
      const slotEnd = new Date(`${b.date}T${b.endTime}:00`);
      return b.status === 'CONFIRMED' && slotEnd >= now;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🎟️</span>
        <h3>No bookings yet</h3>
        <p>You have no ${activeTab} turf bookings.</p>
        <a href="/turfs.html" class="btn btn-primary btn-sm">Find a Turf</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="bookings-list">
      ${filtered.map((booking) => renderBookingItem(booking)).join('')}
    </div>
  `;

  // Attach cancellation handlers
  document.querySelectorAll('.cancel-booking-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bookingId = btn.dataset.id;
      const turfName = btn.dataset.turf;

      showConfirmModal({
        title: 'Cancel Booking?',
        message: `Are you sure you want to cancel your booking for "${turfName}"?`,
        confirmText: 'Cancel Booking',
        isDanger: true,
        onConfirm: async () => {
          try {
            await api.put(`/bookings/${bookingId}/cancel`);
            await loadMyBookings();
          } catch (err) {
            alert(err.message);
          }
        }
      });
    });
  });
}

function renderBookingItem(b) {
  const turf = b.turfId || { name: 'Sports Turf', sport: 'Sport' };
  const badgeClass = b.status === 'CONFIRMED' 
    ? 'badge-confirmed' 
    : b.status === 'CANCELLED' 
    ? 'badge-cancelled' 
    : 'badge-completed';

  const isUpcoming = b.status === 'CONFIRMED';

  return `
    <div class="booking-card">
      <div class="booking-card-main">
        <h3>${escapeHtml(turf.name)}</h3>
        <div class="booking-card-meta">
          <span>⚽ ${escapeHtml(turf.sport)}</span>
          <span>📅 ${formatDateNice(b.date)}</span>
          <span>⏰ ${b.startTime} – ${b.endTime}</span>
          <span>🆔 ${escapeHtml(b.bookingId)}</span>
        </div>
      </div>
      <div class="booking-card-right">
        <div class="booking-card-price">${formatCurrency(b.price)}</div>
        <span class="badge ${badgeClass}">${b.status}</span>
        ${isUpcoming ? `
          <button 
            class="btn btn-danger btn-sm cancel-booking-btn" 
            data-id="${b._id}" 
            data-turf="${escapeHtml(turf.name)}">
            Cancel Booking
          </button>
        ` : ''}
      </div>
    </div>
  `;
}
