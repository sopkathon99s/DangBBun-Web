import { RequestServiceMock } from "./mock/requestServiceMock";
import { LoginServiceMock } from "./mock/loginServiceMock";
import { LoginService } from "./types/loginService";
import { RequestService } from "./types/requestService";
import { UserServiceMock } from "./mock/userServiceMock";
import { UserService } from "./types/userService";

interface Services {
  login: LoginService;
  request: RequestService;
  user: UserService;
}

function mockServiceFactory(): Services {
  const request = new RequestServiceMock();
  const login = new LoginServiceMock(request);
  const user = new UserServiceMock(request);

  return {
    request,
    login,
    user,
  };
}

function serviceFactory() {
  return mockServiceFactory();
}

export const api: Services = serviceFactory();
