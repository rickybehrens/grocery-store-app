import decode from 'jwt-decode';

class Auth {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Existing logic for checking token and expiration
    const token = this.getToken();
    if (!token || this.isTokenExpired(token)) return false;

    // Add new promise-based verification logic (optional)
    return fetch('/api/verify-token', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => data.isValid);
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload('/');
  }
}

export default new Auth();
