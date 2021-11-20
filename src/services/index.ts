import { LoginService } from "./types/loginService";
import { RequestService } from "./types/requestService";
import { UserServiceMock } from "./mock/userServiceMock";
import { UserService } from "./types/userService";
import { RequestServiceReal } from "./real/requestServiceReal";
import { LoginServiceReal } from "./real/loginServiceReal";
import { BungaeService } from "./types/bungaeService";
import { BungaeServiceMock } from "./mock/bungaeServiceMock";

interface Services {
  login: LoginService;
  request: RequestService;
  user: UserService;
  bungae: BungaeService;
}

// function mockServiceFactory(): Services {
//   const request = new RequestServiceMock();
//   const login = new LoginServiceMock(request);
//   const user = new UserServiceMock(request);

//   return {
//     request,
//     login,
//     user,
//   };
// }

function realServiceFactory(): Services {
  const request = new RequestServiceReal();
  const login = new LoginServiceReal(request);
  const user = new UserServiceMock(request);
  const bungae = new BungaeServiceMock();

  return {
    request,
    login,
    user,
    bungae,
  };
}

function serviceFactory() {
  return realServiceFactory();
}

export const api: Services = serviceFactory();
