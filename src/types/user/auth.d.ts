export interface RegisterUserInput {
  email: string;
  password: string;
  phoneNumber: string;
  name: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
}
