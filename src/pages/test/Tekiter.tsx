import styled from "styled-components";
import { NormalBungaeCard } from "../../components/BungaeCard";
import { MainListView } from "../../components/MainListView";

export function TestTekiter() {
  return (
    <Outer>
      <MainListView />
      <NormalBungaeCard
        status="asdf"
        hurryMessage="아직도 망설여?"
        title="title"
        minMember={2}
        maxMember={6}
        currentMember={5}
        meetDate="asdf"
        location="loca"
        description="detal"
        applied={false}
      />
    </Outer>
  );
}

const Outer = styled.div`
  width: 30rem;
  height: 23rem;

  padding-top: 4rem;
`;
