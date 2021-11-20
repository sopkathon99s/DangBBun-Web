import styled from "styled-components";

export function MainListView() {
  return (
    <StyledMainListView>
      <VerticalLine />
    </StyledMainListView>
  );
}

const StyledMainListView = styled.div`
  height: 15rem;
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
  height: 100%;
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
