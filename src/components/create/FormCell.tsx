import styled from "styled-components";

export default function FormCell({ label, children }) {
  return (
    <StyledFormCell>
      <StyledLabel>{label}</StyledLabel>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
    </StyledFormCell>
  );
}

const StyledFormCell = styled.div``;

const StyledLabel = styled.span``;

const StyledChildrenWrapper = styled.div``;