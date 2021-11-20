import { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../utils/login";

export function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin(() => {
    navigate("/");
  });

  async function handleLogin() {
    login.request(username, password);
  }

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
