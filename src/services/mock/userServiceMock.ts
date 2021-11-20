import { RequestService } from "../types/requestService";
import { UserInfo, UserService } from "../types/userService";

export class UserServiceMock implements UserService {
  constructor(private request: RequestService) {}

  async getCurrentUser(): Promise<UserInfo> {
    if ((await this.request.getAccessToken()).length <= 1) {
      throw new Error("인증 실패");
    }

    return {
      username: "helloworld",
    };
  }
}
