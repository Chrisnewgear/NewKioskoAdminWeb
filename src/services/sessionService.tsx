import type { AuthResponse, User } from './authService';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export function setSession(response: AuthResponse){
  localStorage.setItem(TOKEN_KEY, response.token);
  localStorage.setItem(USER_KEY, JSON.stringify(response.user));
}

export function clearSession(){
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken(): string | null{
  return localStorage.getItem(TOKEN_KEY);
}


export function getUser(): User | null{
  const raw = localStorage.getItem(USER_KEY);
  return raw ? (JSON.parse(raw) as User) : null;
}