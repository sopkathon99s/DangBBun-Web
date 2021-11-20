import styled from "styled-components";

export default function FormCell({ label, children }) {
  return (
    <StyledFormCell>
      <StyledLabel>{label}</StyledLabel>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
    </StyledFormCell>
  );
}

const StyledFormCell = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
`;

const StyledChildrenWrapper = styled.div``;
