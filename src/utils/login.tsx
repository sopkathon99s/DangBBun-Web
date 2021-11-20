import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../services";
import { useAuthToken, useAuthTokenSetter } from "../state/auth";
import { useUserSetter } from "../state/user";

export function NeedAuth(props: { children: ReactElement }): ReactElement {
  const nagivate = useNavigate();
  const token = useAuthToken();

  const [needLogin, setNeedLogin] = useState(false);

  useEffect(() => {
    if (needLogin) {
      nagivate("/login", { replace: true });
    }
  }, [needLogin]);

  if (token === "") {
    if (!needLogin) {
      setNeedLogin(true);
    }
    return <div></div>;
  } else {
    if (needLogin) {
      setNeedLogin(false);
    }
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
