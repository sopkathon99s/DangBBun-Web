import { ReactElement, useState } from "react";
import { api } from "../services";
import { useAuthToken, useAuthTokenSetter } from "../state/auth";
import { useUserSetter } from "../state/user";

export function NeedAuth(props: { children: ReactElement }): ReactElement {
  const token = useAuthToken();

  if (token === "") {
    return <div>Loading</div>;
  }

  return props.children;
}

export function useLogin(onSuccess: () => void) {
  const [isError, setIsError] = useState(false);
  const setToken = useAuthTokenSetter();
  const setUser = useUserSetter();

  async function request(username: string, password: string) {
    setIsError(true);
    try {
      const res = await api.login.login({
        username,
        password,
      });
      setToken(res.accessToken);
      setUser({
        username: username,
      });
      onSuccess?.call(null);
    } catch {
      setIsError(true);
    }
  }

  return { request, isError };
}
