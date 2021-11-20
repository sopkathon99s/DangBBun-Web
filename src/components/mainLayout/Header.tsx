import { Link } from "react-router-dom";
import { BungaeCard } from "../BungaeCard";

export function Header() {
  return (
    <header>
      <BungaeCard
        restTime={15}
        bungaeState="OPEN"
        title="title"
        currentCnt={123}
        minCnt={2}
        maxCnt={6}
        date={new Date()}
        location="loca"
        detail="detal"
      />
      <BungaeCard
        restTime={15}
        bungaeState="SUCCESS"
        title="title"
        currentCnt={123}
        minCnt={2}
        maxCnt={6}
        date={new Date()}
        location="loca"
        detail="detal"
      />
      <section>{/* 로고 */}</section>
      <section>
        <Link to="/">뻔개 목록 보기</Link>
        <Link to="/overview">나의 뻔개 목록</Link>
      </section>
    </header>
  );
}
