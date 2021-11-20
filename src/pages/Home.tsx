import write from "../assets/write.png";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";
import { MainListView } from "../components/MainListView";
import { useEffect, useState } from "react";
import { NormalBungaeCard } from "../components/BungaeCard";
import { api } from "../services";
import { Bungae } from "../services/types/bungaeService";

export function HomePage() {
  const [bungaeList, setBungaeList] = useState<Bungae[]>([]);

  useEffect(() => {
    (async () => {
      const list = await api.bungae.getBungaeList();
      setBungaeList(list);
    })();
  }, []);

  return (
    <StyledHome>
      <MainListView
        cards={bungaeList.map((bungae) => (
          <NormalBungaeCard {...bungae} key={bungae.id} />
        ))}
      />
      <GoWrite to="/create">
        <img width="" height="" src={write} />
      </GoWrite>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  margin-top: 4rem;
  padding-left: 1rem;
  padding-right: 2.2rem;
`;

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
