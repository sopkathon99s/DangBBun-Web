import { RequestService } from "../types/requestService";

export class RequestServiceMock implements RequestService {
  async setAccessToken(token: string): Promise<void> {
    console.log(`Token set: ${token}`);
    return;
  }
  async call(): Promise<unknown> {
    return;
  }
}
