import { Outlet } from "react-router";

export function OverviewPage() {
  return (
    <div>
      Overview
      <div>
        <Outlet />
      </div>
    </div>
  );
}
