import { useEffect } from "react";
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { api } from "../services";

const authTokenState = atom({
  key: "authTokenState",
  default: "",
});

export function useAuthToken(): string {
  const authState = useRecoilValue(authTokenState);
  return authState;
}

export function useAuthTokenLoader(): void {
  const setAuthState = useSetRecoilState(authTokenState);
  useEffect(() => {
    const token = getAuthTokenFromLocalStorage();
    setAuthState(token);

    api.request.setAccessToken(token);
  }, []);
}

export function useAuthTokenSetter(): (token: string) => void {
  const setAuthState = useSetRecoilState(authTokenState);
  return (token: string) => {
    setAuthState(token);
    setAuthTokenToLocalStorage(token);
    api.request.setAccessToken(token);
  };
}

export function useAuthTokenDestroyer(): () => void {
  const reset = useResetRecoilState(authTokenState);
  return () => {
    reset();
    removeAuthTokenFromLocalStorage();
    api.request.setAccessToken("");
  };
}

const AUTH_TOKEN_STORAGE_KEY = "AUTH_TOKEN";
function getAuthTokenFromLocalStorage() {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  return token ?? "";
}
function setAuthTokenToLocalStorage(token: string) {
  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
}
function removeAuthTokenFromLocalStorage() {
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
}
