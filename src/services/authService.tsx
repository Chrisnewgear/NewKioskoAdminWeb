import { request } from './HTTPservice';

export type LoginPayLoad = {email: string, password: string};
export type User = { id: string, name: string, email: string, role?: string};
export type AuthResponse = {token: string; user: User};

export function login(payload: LoginPayLoad){
  return request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}