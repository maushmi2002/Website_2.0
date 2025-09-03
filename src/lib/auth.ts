// Simple authentication helper
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'DSeTC@2025'
};

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

// For client-side auth state
export function setAuthToken(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('isAuthenticated', 'true');
  }
}

export function clearAuthToken(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('isAuthenticated');
  }
}

export function isAuthenticated(): boolean {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  }
  return false;
}