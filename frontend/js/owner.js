// ===================================================
// Turf Owner Dashboard & Management Logic (owner.js)
// ===================================================
// Handles dashboard statistics, listing, adding, editing,
// and deleting turfs, plus viewing bookings for owner's turfs.

document.addEventListener('DOMContentLoaded', async () => {
  // Ensure logged-in user is an owner
  const user = auth.requireAuth('owner');
  if (!user) return;

  // Display owner name on dashboard
  const ownerNameEl = document.getElementById('owner-name');
  if (ownerNameEl) {
    ownerNameEl.textContent = user.name;
  }

  // 1. Dashboard View
  if (document.getElementById('owner-dashboard-view')) {
    await loadDashboardData();
  }

  // 2. Add Turf Form
  const addTurfForm = document.getElementById('add-turf-form');
  if (addTurfForm) {
    setupAddTurfForm(addTurfForm);
  }

  // 3. Edit Turf Form
  const editTurfForm = document.getElementById('edit-turf-form');
  if (editTurfForm) {
    setupEditTurfForm(editTurfForm);
  }
});

// Load Dashboard Metrics, Turfs, and Bookings
async function loadDashboardData() {
  try {
    const [turfsRes, bookingsRes] = await Promise.all([
      api.get('/owner/turfs'),
      api.get('/owner/bookings')
    ]);

    const turfs = turfsRes.data || [];
    const bookings = bookingsRes.data || [];

    // Summary counts
    document.getElementById('stat-turfs-count').textContent = turfs.length;
    document.getElementById('stat-bookings-count').textContent = bookings.length;

    // Render owner's turfs
    renderOwnerTurfs(turfs);

    // Render bookings for owner's turfs
    renderOwnerBookings(bookings);
  } catch (error) {
    console.error('Owner Dashboard Load Error:', error);
  }
}

function renderOwnerTurfs(turfs) {
  const container = document.getElementById('owner-turfs-container');
  if (!container) return;

  if (turfs.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🏟️</span>
        <h3>No turfs added yet</h3>
        <p>You haven't listed any sports turfs yet. Add your first turf to start receiving bookings.</p>
        <a href="/add-turf.html" class="btn btn-primary btn-sm">+ Add Your First Turf</a>
      </div>
    `;
    return;
  }

  container.innerHTML = turfs.map((turf) => `
    <div class="owner-turf-card">
      <div class="owner-turf-info">
        <h3>${escapeHtml(turf.name)}</h3>
        <p>⚽ ${escapeHtml(turf.sport)} • 📍 ${escapeHtml(turf.area)}, ${escapeHtml(turf.city)} • <strong>${formatCurrency(turf.pricePerHour)}/hr</strong></p>
      </div>
      <div class="owner-turf-actions">
        <a href="/edit-turf.html?id=${turf._id}" class="btn btn-secondary btn-sm">Edit</a>
        <button class="btn btn-danger btn-sm delete-turf-btn" data-id="${turf._id}" data-name="${escapeHtml(turf.name)}">Delete</button>
      </div>
    </div>
  `).join('');

  // Attach delete handlers
  document.querySelectorAll('.delete-turf-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;

      showConfirmModal({
        title: 'Delete Turf?',
        message: `Are you sure you want to delete "${name}"? All associated booking history will also be removed.`,
        confirmText: 'Delete Turf',
        isDanger: true,
        onConfirm: async () => {
          try {
            await api.delete('/turfs/' + id);
            await loadDashboardData();
          } catch (err) {
            alert(err.message);
          }
        }
      });
    });
  });
}

function renderOwnerBookings(bookings) {
  const container = document.getElementById('owner-bookings-container');
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No bookings yet</h3>
        <p>No player reservations have been made for your turfs yet.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookings.map((b) => {
    const player = b.userId || { name: 'Player', phone: '-' };
    const turf = b.turfId || { name: 'Turf' };
    const badgeClass = b.status === 'CONFIRMED' 
      ? 'badge-confirmed' 
      : b.status === 'CANCELLED' 
      ? 'badge-cancelled' 
      : 'badge-completed';

    return `
      <div class="owner-booking-card">
        <div>
          <h4>👤 ${escapeHtml(player.name)} <span style="font-weight: normal; color: var(--muted);">(${escapeHtml(player.phone)})</span></h4>
          <p style="color: var(--muted); font-size: 0.9rem; margin-top: 4px;">
            🏟️ <strong>${escapeHtml(turf.name)}</strong> • 📅 ${formatDateNice(b.date)} • ⏰ ${b.startTime} – ${b.endTime}
          </p>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; margin-bottom: 4px;">${formatCurrency(b.price)}</div>
          <span class="badge ${badgeClass}">${b.status}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Add Turf Handler
function setupAddTurfForm(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const alertBox = document.getElementById('owner-alert');
    const submitBtn = form.querySelector('button[type="submit"]');

    alertBox.style.display = 'none';

    // Collect facilities checkboxes
    const facilities = [];
    form.querySelectorAll('input[name="facilities"]:checked').forEach((cb) => {
      facilities.push(cb.value);
    });

    const payload = {
      name: document.getElementById('name').value.trim(),
      sport: document.getElementById('sport').value,
      city: document.getElementById('city').value.trim(),
      area: document.getElementById('area').value.trim(),
      address: document.getElementById('address').value.trim(),
      description: document.getElementById('description').value.trim(),
      pricePerHour: document.getElementById('pricePerHour').value,
      image: document.getElementById('image').value.trim(),
      facilities
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Adding Turf...';

    try {
      await api.post('/turfs', payload);
      window.location.href = '/owner-dashboard.html';
    } catch (error) {
      alertBox.textContent = error.message;
      alertBox.className = 'alert alert-error';
      alertBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Add Turf';
    }
  });
}

// Edit Turf Handler
async function setupEditTurfForm(form) {
  const urlParams = new URLSearchParams(window.location.search);
  const turfId = urlParams.get('id');

  if (!turfId) {
    window.location.href = '/owner-dashboard.html';
    return;
  }

  // Pre-fill existing data
  try {
    const res = await api.get('/turfs/' + turfId);
    const turf = res.data;

    document.getElementById('name').value = turf.name;
    document.getElementById('sport').value = turf.sport;
    document.getElementById('city').value = turf.city;
    document.getElementById('area').value = turf.area;
    document.getElementById('address').value = turf.address;
    document.getElementById('description').value = turf.description;
    document.getElementById('pricePerHour').value = turf.pricePerHour;
    document.getElementById('image').value = turf.image || '';

    // Check facilities checkboxes
    if (turf.facilities && Array.isArray(turf.facilities)) {
      form.querySelectorAll('input[name="facilities"]').forEach((cb) => {
        if (turf.facilities.includes(cb.value)) {
          cb.checked = true;
        }
      });
    }
  } catch (error) {
    alert('Unable to load turf data for editing.');
    window.location.href = '/owner-dashboard.html';
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const alertBox = document.getElementById('owner-alert');
    const submitBtn = form.querySelector('button[type="submit"]');

    alertBox.style.display = 'none';

    const facilities = [];
    form.querySelectorAll('input[name="facilities"]:checked').forEach((cb) => {
      facilities.push(cb.value);
    });

    const payload = {
      name: document.getElementById('name').value.trim(),
      sport: document.getElementById('sport').value,
      city: document.getElementById('city').value.trim(),
      area: document.getElementById('area').value.trim(),
      address: document.getElementById('address').value.trim(),
      description: document.getElementById('description').value.trim(),
      pricePerHour: document.getElementById('pricePerHour').value,
      image: document.getElementById('image').value.trim(),
      facilities
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Updating Turf...';

    try {
      await api.put('/turfs/' + turfId, payload);
      window.location.href = '/owner-dashboard.html';
    } catch (error) {
      alertBox.textContent = error.message;
      alertBox.className = 'alert alert-error';
      alertBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Update Turf';
    }
  });
}
