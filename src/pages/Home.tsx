import { useAuthToken } from "../state/auth";

export function HomePage() {
  const auth = useAuthToken();
  if (auth === "") {
    console.log("haha");
  }
  return <div>{auth}</div>;
}
