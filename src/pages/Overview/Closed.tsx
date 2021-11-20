import styled from "styled-components";
import { theme } from "../../styles/theme";

export function ClosedPage() {
  return (
    <div>
      <SectionWrapper>
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </SectionWrapper>
    </div>
  );
}

const SectionWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const LeftSection = styled.section`
  width: 1.8rem;
  border-right: 1px solid ${theme.color.red};
`;
const RightSection = styled.section``;
