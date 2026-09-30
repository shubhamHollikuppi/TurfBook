// ===================================================
// Authentication Logic (auth.js)
// ===================================================
// Handles login, registration, logout, and access protection.

const auth = {
  // Login action
  async login(email, password) {
    const res = await api.post('/auth/login', { email, password });
    if (res.success && res.data) {
      api.setToken(res.data.token);
      api.setUser(res.data.user);
      return res.data.user;
    }
  },

  // Register action
  async register(formData) {
    const res = await api.post('/auth/register', formData);
    if (res.success && res.data) {
      api.setToken(res.data.token);
      api.setUser(res.data.user);
      return res.data.user;
    }
  },

  // Logout action
  logout() {
    api.removeToken();
    api.removeUser();
    window.location.href = '/index.html';
  },

  // Check current session against route requirements
  requireAuth(requiredRole = null) {
    const token = api.getToken();
    const user = api.getUser();

    if (!token || !user) {
      // Redirect unauthenticated user to login
      window.location.href = '/login.html?redirect=' + encodeURIComponent(window.location.pathname);
      return null;
    }

    if (requiredRole && user.role !== requiredRole) {
      alert("You don't have permission to access this page.");
      window.location.href = user.role === 'owner' ? '/owner-dashboard.html' : '/turfs.html';
      return null;
    }

    return user;
  }
};

// Form listeners for Login page
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('auth-alert');
      const submitBtn = loginForm.querySelector('button[type=\"submit\"]');

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      alertBox.style.display = 'none';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Logging in...';

      try {
        const user = await auth.login(email, password);
        // Redirect based on role
        if (user.role === 'owner') {
          window.location.href = '/owner-dashboard.html';
        } else {
          const params = new URLSearchParams(window.location.search);
          const redirect = params.get('redirect');
          window.location.href = redirect || '/turfs.html';
        }
      } catch (error) {
        alertBox.textContent = error.message;
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
      }
    });
  }

  // Form listeners for Register page
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('auth-alert');
      const submitBtn = registerForm.querySelector('button[type=\"submit\"]');

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const role = document.getElementById('role').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      alertBox.style.display = 'none';

      // Validation
      if (password !== confirmPassword) {
        alertBox.textContent = 'Passwords do not match.';
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Creating account...';

      try {
        const user = await auth.register({ name, email, phone, role, password });
        if (user.role === 'owner') {
          window.location.href = '/owner-dashboard.html';
        } else {
          window.location.href = '/turfs.html';
        }
      } catch (error) {
        alertBox.textContent = error.message;
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Register';
      }
    });
  }
});
