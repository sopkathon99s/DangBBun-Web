import styled from "styled-components";

interface ContactsProps {
  items: {
    name: string;
    contact: string;
  }[];
}

export function Contacts(props: ContactsProps) {
  return (
    <StyledContacts>
      <Title>뻔개원 연락처</Title>
      {props.items.map((item, idx) => (
        <Cell key={idx}>
          <span>{item.name}</span>
          <span>{item.contact}</span>
        </Cell>
      ))}
    </StyledContacts>
  );
}

const StyledContacts = styled.div``;

const Title = styled.h3`
  color: #fe3838;
  font-weight: bold;
  font-size: 1.2rem;

  margin-top: 1.4rem;
  margin-bottom: 1rem;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;

  height: 2.4rem;

  & > *:first-child {
    width: 4.5rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(236, 236, 236, 0.92);
  }
`;
