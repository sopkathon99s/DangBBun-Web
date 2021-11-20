import styled from "styled-components";

interface AppliedPeopleProps {
  current: number;
}

export function AppliedPeople(props: AppliedPeopleProps) {
  const { current } = props;

  return (
    <StyledAppliedPeople>
      {[...new Array(current)].map((_, idx) => (
        <Person key={idx}>{getLet()}</Person>
      ))}
    </StyledAppliedPeople>
  );
}

const StyledAppliedPeople = styled.div`
  display: flex;

  & > * {
    margin-right: -0.8rem;
  }
`;

const Person = styled.div`
  background-color: rgba(254, 56, 56, 0.1);
  border-radius: 50%;

  width: 2.8rem;
  height: 2.8rem;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const initials = ["김", "이", "박", "서", "조", "남", "성"];

function getLet() {
  const mx = initials.length;

  const idx = Math.floor(Math.random() * mx);

  return initials[idx];
}
