export interface LoginInfo {
  username: string;
  password: string;
}

export interface LoginResult {
  accessToken: string;
}

export interface LoginService {
  login(info: LoginInfo): Promise<LoginResult>;
}
