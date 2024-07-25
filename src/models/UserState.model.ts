export interface User {
  username: string;
  password: string;
}

export interface UserState {
  user: User;
  error: string | null;
  loading: boolean;
}
