import styled from "styled-components";
import { theme } from "../styles/theme";
import logo from "../assets/logo_white.png";

function Loading() {
  return (
    <Section>
      <img src={logo} width="137px" height="45px" alt="logo" />
    </Section>
  );
}

export default Loading;

const Section = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.color.red};
  display: flex;
  justify-content: center;
  align-items: center;
`;
