// ===================================================
// Central API Client (api.js)
// ===================================================
// Standardizes fetch requests to the Express backend.
// Automatically attaches JWT token and provides uniform error handling.

const API_BASE = '/api';

const api = {
  // Token storage helpers
  getToken() {
    return localStorage.getItem('turfbook_token');
  },
  setToken(token) {
    localStorage.setItem('turfbook_token', token);
  },
  removeToken() {
    localStorage.removeItem('turfbook_token');
  },

  // User storage helpers
  getUser() {
    const userStr = localStorage.getItem('turfbook_user');
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },
  setUser(user) {
    localStorage.setItem('turfbook_user', JSON.stringify(user));
  },
  removeUser() {
    localStorage.removeItem('turfbook_user');
  },

  // Request dispatcher
  async request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      return data;
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error.message);
      throw error;
    }
  },

  // HTTP Verb Shortcuts
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  },

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  },

  put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
};
