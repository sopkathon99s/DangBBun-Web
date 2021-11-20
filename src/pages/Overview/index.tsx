import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function OverviewPage() {
  return (
    <div>
      <nav>
        <Link to="submitted">내가 연 당뻔</Link>
        <Link to="closed">내가 신청한 당뻔</Link>
      </nav>
      <Outlet />
    </div>
  );
}
