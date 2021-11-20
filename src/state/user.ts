import { atom, useRecoilValue, useSetRecoilState } from "recoil";

interface User {
  username: string;
}

const userState = atom<User>({
  key: "userState",
  default: {
    username: "s",
  },
});

export function useUser() {
  const user = useRecoilValue(userState);
  return user;
}

export function useUserSetter() {
  const setUserState = useSetRecoilState(userState);
  return setUserState;
}
