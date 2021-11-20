import { AppRoutes } from "./routes";
import { useAuthTokenLoader } from "./state/auth";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  useAuthTokenLoader();

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
