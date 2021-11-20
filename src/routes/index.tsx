import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/mainLayout/Header";
import { CreatePage } from "../pages/Create";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { LogoutPage } from "../pages/Logout";
import { OverviewPage } from "../pages/Overview";
import { ClosedPage } from "../pages/Overview/Closed";
import { SubmittedPage } from "../pages/Overview/Submitted";
import { Page404 } from "../pages/Page404";
import { TestTekiter } from "../pages/test/Tekiter";
import { NeedAuth } from "../utils/login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <NeedAuth>
              <HomePage />
            </NeedAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/overview" element={<OverviewPage />}>
          <Route path="submitted" element={<SubmittedPage />} />
          <Route path="closed" element={<ClosedPage />} />
        </Route>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/test">
          <Route path="tekiter" element={<TestTekiter />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
