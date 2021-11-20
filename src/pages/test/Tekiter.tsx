import styled from "styled-components";
import { BungaeCard } from "../../components/BungaeCard";

export function TestTekiter() {
  return (
    <Outer>
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
    </Outer>
  );
}

const Outer = styled.div`
  width: 30rem;
  height: 23rem;
`;
