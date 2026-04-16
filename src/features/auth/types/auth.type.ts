export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}

export type UserRole = 'Admin' | 'Cajero';

export interface User {
  userId: number;
  roleId: number;
  roleName: UserRole
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}