import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo1.png";
import { theme } from "../../styles/theme";

export function Header() {
  const { pathname } = useLocation();
  return (
    <TopBar>
      <ImgWrapper>
        <img src={Logo} width="71px" height="23px" alt="logo" />
      </ImgWrapper>
      <ul>
        <Item selected={pathname === "/"}>
          <Link to="/">뻔개 목록 보기</Link>
        </Item>
        <Item selected={pathname === "/overview"}>
          <Link to="/overview">나의 뻔개 목록</Link>
        </Item>
      </ul>
    </TopBar>
  );
}

const TopBar = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgWrapper = styled.div`
  margin-left: 1.5rem;
`;

const Item = styled.li<{ selected: boolean }>`
  display: inline-block;
  margin-right: 1.3rem;
  color: ${theme.color.red};
  font-weight: ${(props) => (props.selected ? "bold" : "inherit")};
`;
