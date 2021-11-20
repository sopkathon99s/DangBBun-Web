import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePage } from "../pages/Create";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { OverviewPage } from "../pages/Overview";
import { ClosedPage } from "../pages/Overview/Closed";
import { SubmittedPage } from "../pages/Overview/Submitted";
import { Page404 } from "../pages/Page404";
import { NeedAuth } from "../utils/login";

export function AppRoutes() {
  return (
    <BrowserRouter>
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
        <Route path="/overview" element={<OverviewPage />}>
          <Route path="submitted" element={<SubmittedPage />} />
          <Route path="closed" element={<ClosedPage />} />
        </Route>
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
