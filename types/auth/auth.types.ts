export type UserRole = "admin" | "office" | "vendor";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginUser {
  id: string;
  email: string;
  phone: string;
  role: UserRole;
}

export interface LoginResponseData {
  accessToken: string;
  user: LoginUser;
}

export interface ApiSuccessResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp: string;
  path: string;
}

export type LoginResponse = ApiSuccessResponse<LoginResponseData>;
