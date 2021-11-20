import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export function OverviewPage() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Items>
        <Item selected={pathname === "/overview/submitted"}>
          <StyledLink to="submitted">내가 연 뻔개</StyledLink>
        </Item>
        <Item selected={pathname === "/overview/closed"}>
          <StyledLink to="closed">내가 신청한 뻔개</StyledLink>
        </Item>
      </Items>
      <Outlet />
    </div>
  );
}

const Items = styled.ul`
  width: 100%;
  height: 5rem;
  display: flex;
`;

const Item = styled.li<{ selected: boolean }>`
  width: 100%;

  font-size: 1.2rem;
  background-color: ${(props) => (props.selected ? `${theme.color.red}` : "rgba(254, 56, 56, 0.1)")};
  color: ${(props) => (props.selected ? "white" : `${theme.color.red}`)};
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
