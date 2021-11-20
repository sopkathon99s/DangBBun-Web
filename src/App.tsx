import { AppRoutes } from "./routes";
import { useAuthTokenLoader } from "./state/auth";

function App() {
  useAuthTokenLoader();

  return <AppRoutes />;
}

export default App;
