import styled from "styled-components";

export default function FormMemberCell({ label, children }) {
  return (
    <StyledFormCell>
      <StyledLabel>{label}</StyledLabel>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
    </StyledFormCell>
  );
}

const StyledFormCell = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
`;

const StyledChildrenWrapper = styled.div``;
