export interface RequestService {
  setAccessToken(token: string): Promise<void>;
  call<T>(method: string, path: string, data?: T): Promise<unknown>;
}
