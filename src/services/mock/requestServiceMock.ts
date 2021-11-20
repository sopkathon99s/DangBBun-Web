import { RequestService } from "../types/requestService";

export class RequestServiceMock implements RequestService {
  private token = "";

  async setAccessToken(token: string): Promise<void> {
    console.log(`Token set: ${token}`);
    this.token = token;
    return;
  }
  async call<T, K>(method: string, path: string, data?: T): Promise<K> {
    return data as unknown as K;
  }
  async getAccessToken(): Promise<string> {
    return this.token;
  }
}
