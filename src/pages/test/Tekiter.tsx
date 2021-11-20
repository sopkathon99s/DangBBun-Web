import styled from "styled-components";
import { NormalBungaeCard } from "../../components/BungaeCard";
import { MainListView } from "../../components/MainListView";

export function TestTekiter() {
  return (
    <Outer>
      <MainListView
        cards={[...new Array(10)].map((_, idx) => (
          <NormalBungaeCard
            key={idx}
            status={{
              mode: "timeLeft",
              message: "hah",
            }}
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
        ))}
      />
    </Outer>
  );
}

const Outer = styled.div`
  padding-top: 4rem;
`;
