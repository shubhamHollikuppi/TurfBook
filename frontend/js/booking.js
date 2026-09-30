// ===================================================
// Booking Process & Confirmation (booking.js)
// ===================================================
// Verifies slot, creates booking record, and renders confirmation screen.

document.addEventListener('DOMContentLoaded', async () => {
  const summaryCard = document.getElementById('booking-summary-card');
  if (!summaryCard) return;

  // Ensure user is authenticated as player
  const user = auth.requireAuth('player');
  if (!user) return;

  const params = new URLSearchParams(window.location.search);
  const turfId = params.get('turfId');
  const date = params.get('date');
  const startTime = params.get('startTime');
  const endTime = params.get('endTime');
  const displayTime = params.get('displayTime');

  if (!turfId || !date || !startTime || !endTime) {
    alert('Incomplete booking parameters. Please choose a turf and slot first.');
    window.location.href = '/turfs.html';
    return;
  }

  // Load turf information
  try {
    const res = await api.get('/turfs/' + turfId);
    const turf = res.data;

    // Display summary details
    document.getElementById('summary-turf').textContent = turf.name;
    document.getElementById('summary-sport').textContent = turf.sport;
    document.getElementById('summary-date').textContent = formatDateNice(date);
    document.getElementById('summary-time').textContent = displayTime || `${startTime} – ${endTime}`;
    document.getElementById('summary-price').textContent = formatCurrency(turf.pricePerHour);

    // Setup Confirm Booking button
    const confirmBtn = document.getElementById('confirm-booking-btn');
    confirmBtn.addEventListener('click', async () => {
      confirmBtn.disabled = true;
      confirmBtn.textContent = 'Confirming your booking...';
      const alertBox = document.getElementById('booking-alert');
      alertBox.style.display = 'none';

      try {
        const bookingRes = await api.post('/bookings', {
          turfId,
          date,
          startTime,
          endTime
        });

        // Booking successful! Display success view
        const booking = bookingRes.data;
        showBookingSuccess(booking, turf);
      } catch (error) {
        alertBox.textContent = error.message;
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
        confirmBtn.disabled = false;
        confirmBtn.textContent = 'Confirm Booking';
      }
    });
  } catch (error) {
    alert('Unable to load booking details.');
    window.location.href = '/turfs.html';
  }
});

function showBookingSuccess(booking, turf) {
  document.getElementById('booking-summary-card').style.display = 'none';

  const successCard = document.getElementById('booking-success-card');
  successCard.style.display = 'block';

  document.getElementById('success-turf-name').textContent = turf.name;
  document.getElementById('success-date-time').textContent = `${formatDateNice(booking.date)} (${booking.startTime} – ${booking.endTime})`;
  document.getElementById('success-price').textContent = formatCurrency(booking.price);
  document.getElementById('success-booking-id').textContent = booking.bookingId;
}

function formatDateNice(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
