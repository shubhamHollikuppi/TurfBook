// ===================================================
// Main App & Navigation Controller (main.js)
// ===================================================
// Initializes common UI elements: dynamic navbar, mobile menu,
// and the reusable confirmation modal across all pages.

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupModal();
});

// Setup dynamic navigation depending on login state & role
function setupNavbar() {
  const navContainer = document.querySelector('.nav-container');
  if (!navContainer) return;

  const user = api.getUser();
  const currentPath = window.location.pathname;

  let menuHtml = '';
  let actionsHtml = '';

  if (!user) {
    // 1. Logged-out Navigation
    menuHtml = `
      <ul class="nav-menu">
        <li><a href="/index.html" class="nav-link ${currentPath.includes('index') || currentPath === '/' ? 'active' : ''}">Home</a></li>
        <li><a href="/turfs.html" class="nav-link ${currentPath.includes('turf') ? 'active' : ''}">Find Turfs</a></li>
        <li><a href="/index.html#how-it-works" class="nav-link">How It Works</a></li>
      </ul>
    `;
    actionsHtml = `
      <div class="nav-actions">
        <a href="/login.html" class="btn btn-secondary btn-sm">Login</a>
        <a href="/register.html" class="btn btn-primary btn-sm">Register</a>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  } else if (user.role === 'player') {
    // 2. Player Navigation
    menuHtml = `
      <ul class="nav-menu">
        <li><a href="/index.html" class="nav-link ${currentPath.includes('index') || currentPath === '/' ? 'active' : ''}">Home</a></li>
        <li><a href="/turfs.html" class="nav-link ${currentPath.includes('turfs.html') || currentPath.includes('turf-details') ? 'active' : ''}">Find Turfs</a></li>
        <li><a href="/my-bookings.html" class="nav-link ${currentPath.includes('booking') ? 'active' : ''}">My Bookings</a></li>
      </ul>
    `;
    actionsHtml = `
      <div class="nav-actions">
        <span class="nav-user">${escapeHtml(user.name)}</span>
        <button id="logout-btn" class="btn btn-secondary btn-sm">Logout</button>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  } else if (user.role === 'owner') {
    // 3. Turf Owner Navigation
    menuHtml = `
      <ul class="nav-menu">
        <li><a href="/owner-dashboard.html" class="nav-link ${currentPath.includes('dashboard') ? 'active' : ''}">Dashboard</a></li>
        <li><a href="/owner-dashboard.html#my-turfs" class="nav-link">My Turfs</a></li>
        <li><a href="/owner-dashboard.html#owner-bookings" class="nav-link">Bookings</a></li>
      </ul>
    `;
    actionsHtml = `
      <div class="nav-actions">
        <span class="nav-user">${escapeHtml(user.name)} (Owner)</span>
        <button id="logout-btn" class="btn btn-secondary btn-sm">Logout</button>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  navContainer.innerHTML = `
    <a href="/index.html" class="nav-brand">
      <span class="brand-dot"></span> TurfBook
    </a>
    ${menuHtml}
    ${actionsHtml}
  `;

  // Attach logout handler
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.logout();
    });
  }

  // Attach mobile menu toggle
  const hamburger = document.getElementById('hamburger-btn');
  const menu = document.querySelector('.nav-menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }
}

// Reusable Confirmation Modal
let modalConfirmCallback = null;

function setupModal() {
  let modalEl = document.getElementById('global-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'global-modal';
    modalEl.className = 'modal-backdrop';
    modalEl.innerHTML = `
      <div class="modal-dialog">
        <h3 class="modal-title" id="modal-title">Confirm Action</h3>
        <p class="modal-message" id="modal-message">Are you sure you want to proceed?</p>
        <div class="modal-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="modal-cancel-btn">Cancel</button>
          <button type="button" class="btn btn-danger btn-sm" id="modal-confirm-btn">Confirm</button>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);

    document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeModal();
    });

    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
      if (modalConfirmCallback) {
        modalConfirmCallback();
      }
      closeModal();
    });
  }
}

function showConfirmModal({ title, message, confirmText = 'Confirm', isDanger = true, onConfirm }) {
  const modalEl = document.getElementById('global-modal');
  if (!modalEl) return;

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;

  const confirmBtn = document.getElementById('modal-confirm-btn');
  confirmBtn.textContent = confirmText;
  confirmBtn.className = isDanger ? 'btn btn-danger btn-sm' : 'btn btn-primary btn-sm';

  modalConfirmCallback = onConfirm;
  modalEl.classList.add('open');
}

function closeModal() {
  const modalEl = document.getElementById('global-modal');
  if (modalEl) modalEl.classList.remove('open');
  modalConfirmCallback = null;
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Utility: Format currency (e.g. ₹800)
function formatCurrency(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}
