import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { api } from "../services";

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

interface UserLoaderOptions {
  onError(): void;
}

export function useUserLoader(options: UserLoaderOptions) {
  const setUser = useUserSetter();

  useEffect(() => {
    (async () => {
      try {
        const user = await api.user.getCurrentUser();
        setUser({ username: user.username });
      } catch {
        options.onError();
      }
    })();
  }, []);
}
