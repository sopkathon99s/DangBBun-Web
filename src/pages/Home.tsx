import write from "../assets/write.png";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <SectionWrapper>
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </SectionWrapper>
      <GoWrite to="/write">
        <img width="" height="" src={write} />
      </GoWrite>
    </>
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

const GoWrite = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 50%;
  background-color: ${theme.color.red};
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.45);
  z-index: 5;
`;
