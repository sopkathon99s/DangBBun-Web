import { RequestService } from "../types/requestService";
import { LoginInfo, LoginResult, LoginService } from "../types/loginService";

export class LoginServiceMock implements LoginService {
  constructor(private request: RequestService) {}

  async login(info: LoginInfo): Promise<LoginResult> {
    await this.request.call("post", "/login");

    return {
      accessToken: "token of " + info.username,
    };
  }

  async logout(): Promise<void> {
    return;
  }
}
