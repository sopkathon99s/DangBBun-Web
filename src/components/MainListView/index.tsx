import { Children, ReactNode } from "react";
import styled from "styled-components";

interface MainListViewProps {
  cards: ReactNode;
}

export function MainListView(props: MainListViewProps) {
  const { cards } = props;

  const newCards = Children.map(cards, (child) => {
    return (
      <Splitted>
        <VerticalLine />
        {child}
      </Splitted>
    );
  });

  return <StyledMainListView>{newCards}</StyledMainListView>;
}

const StyledMainListView = styled.div``;

const Splitted = styled.div`
  display: flex;
  align-items: stretch;
  & > *:last-child {
    flex-grow: 1;
    margin-bottom: 4.6rem;
  }
`;

function VerticalLine() {
  return (
    <StyledVerticalLine>
      <InnerVerticalLine />
      <InnerDot />
    </StyledVerticalLine>
  );
}

const StyledVerticalLine = styled.div`
  width: 3rem;

  display: flex;
  justify-content: center;
`;

const InnerVerticalLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: #fe8888;
`;

const InnerDot = styled.div`
  width: 1.2rem;
  height: 1.2rem;

  background-color: #fe8888;
  border-radius: 100%;

  transform: translateX(-0.7rem);
`;
