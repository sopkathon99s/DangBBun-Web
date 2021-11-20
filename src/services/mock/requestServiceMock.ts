import { RequestService } from "../types/requestService";

export class RequestServiceMock implements RequestService {
  private token = "";

  async setAccessToken(token: string): Promise<void> {
    console.log(`Token set: ${token}`);
    this.token = token;
    return;
  }
  async call(): Promise<unknown> {
    return;
  }
  async getAccessToken(): Promise<string> {
    return this.token;
  }
}
