import { LoginInfo, LoginResult, LoginService } from "../types/loginService";
import { RequestService } from "../types/requestService";

interface ServerLoginRequest {
  id: string;
  password: string;
}

interface ServerLoginResponse {
  data: {
    user: {
      id: number;
      nickname: string;
      profileImage: string;
    };
    accesstoken: string;
  };
}

export class LoginServiceReal implements LoginService {
  constructor(private request: RequestService) {}

  async login(info: LoginInfo): Promise<LoginResult> {
    const res = await this.request.call<ServerLoginRequest, ServerLoginResponse>("POST", "auth/signin", {
      id: info.username,
      password: info.password,
    });

    await this.request.setAccessToken(res.data.accesstoken);
    return {
      accessToken: res.data.accesstoken,
    };
  }
}
