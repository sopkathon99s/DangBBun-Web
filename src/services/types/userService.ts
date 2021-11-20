export interface UserInfo {
  username: string;
}

export interface UserService {
  getCurrentUser(): Promise<UserInfo>;
}
