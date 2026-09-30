// ===================================================
// Turf Discovery & Filtering Logic (turfs.js)
// ===================================================
// Fetches, filters, and renders turf cards on turfs.html and index.html.

document.addEventListener('DOMContentLoaded', () => {
  const turfsContainer = document.getElementById('turfs-list');
  if (!turfsContainer) return;

  // Read URL query parameters (e.g. from homepage sport click or search)
  const urlParams = new URLSearchParams(window.location.search);
  const initialSport = urlParams.get('sport');
  const initialSearch = urlParams.get('search');

  if (initialSport && document.getElementById('filter-sport')) {
    document.getElementById('filter-sport').value = initialSport;
  }
  if (initialSearch && document.getElementById('search-input')) {
    document.getElementById('search-input').value = initialSearch;
  }

  // Initial load
  fetchAndRenderTurfs();

  // Search & Filter event listeners
  const filterForm = document.getElementById('filter-form');
  if (filterForm) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetchAndRenderTurfs();
    });

    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        filterForm.reset();
        fetchAndRenderTurfs();
      });
    }
  }
});

async function fetchAndRenderTurfs() {
  const container = document.getElementById('turfs-list');
  if (!container) return;

  container.innerHTML = '<div class="empty-state"><p>Loading turfs...</p></div>';

  // Gather filter values
  const search = document.getElementById('search-input')?.value.trim() || '';
  const sport = document.getElementById('filter-sport')?.value || '';
  const city = document.getElementById('filter-city')?.value || '';
  const maxPrice = document.getElementById('filter-price')?.value || '';

  // Build query string
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (sport && sport !== 'All') params.append('sport', sport);
  if (city && city !== 'All') params.append('city', city);
  if (maxPrice) params.append('maxPrice', maxPrice);

  try {
    const res = await api.get('/turfs?' + params.toString());
    const turfs = res.data;

    if (!turfs || turfs.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <span class="empty-state-icon">🏟️</span>
          <h3>No turfs found</h3>
          <p>We couldn't find a turf matching your search. Try changing your search or filters.</p>
          <button class="btn btn-primary btn-sm" onclick="resetAndReloadTurfs()">Clear Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = turfs.map((turf) => renderTurfCard(turf)).join('');
  } catch (error) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>Unable to load turfs</h3>
        <p>Something went wrong while connecting to the server. Please try again.</p>
        <button class="btn btn-secondary btn-sm" onclick="fetchAndRenderTurfs()">Try Again</button>
      </div>
    `;
  }
}

function renderTurfCard(turf) {
  const fallbackImg = 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80';
  return `
    <div class="turf-card">
      <div class="turf-image-wrapper">
        <img 
          src="${escapeHtml(turf.image || fallbackImg)}" 
          alt="${escapeHtml(turf.name)}"
          onerror="this.src='${fallbackImg}'"
          loading="lazy">
        <span class="turf-badge">${escapeHtml(turf.sport)}</span>
      </div>
      <div class="turf-body">
        <h3 class="turf-title">${escapeHtml(turf.name)}</h3>
        <p class="turf-location">
          <span>📍</span> ${escapeHtml(turf.area)}, ${escapeHtml(turf.city)}
        </p>
        <div class="turf-footer">
          <div class="turf-price">${formatCurrency(turf.pricePerHour)} <span>/ hour</span></div>
          <a href="/turf-details.html?id=${turf._id}" class="btn btn-outline btn-sm">View Details</a>
        </div>
      </div>
    </div>
  `;
}

function resetAndReloadTurfs() {
  const filterForm = document.getElementById('filter-form');
  if (filterForm) filterForm.reset();
  fetchAndRenderTurfs();
}
