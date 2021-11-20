import { useEffect } from "react";
import { useLogout } from "../utils/login";

export function LogoutPage() {
  const logout = useLogout();

  useEffect(() => {
    logout.logout();
  });
  return <></>;
}
