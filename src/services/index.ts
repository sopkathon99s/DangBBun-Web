import { RequestServiceMock } from "./mock/requestServiceMock";
import { LoginServiceMock } from "./mock/loginServiceMock";
import { LoginService } from "./types/loginService";
import { RequestService } from "./types/requestService";

interface Services {
  login: LoginService;
  request: RequestService;
}

function mockServiceFactory(): Services {
  const request = new RequestServiceMock();
  const login = new LoginServiceMock(request);

  return {
    login,
    request,
  };
}

function serviceFactory() {
  return mockServiceFactory();
}

export const api: Services = serviceFactory();
