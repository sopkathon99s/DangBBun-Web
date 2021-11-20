export interface RequestService {
  setAccessToken(token: string): Promise<void>;
  getAccessToken(): Promise<string>;
  call<T>(method: string, path: string, data?: T): Promise<unknown>;
}
