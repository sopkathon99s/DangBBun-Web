import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <section>{/* 로고 */}</section>
      <section>
        <Link to="/">뻔개 목록 보기</Link>
        <Link to="/overview">나의 뻔개 목록</Link>
      </section>
    </header>
  );
}
