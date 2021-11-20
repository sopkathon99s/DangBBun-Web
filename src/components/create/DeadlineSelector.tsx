import React from "react";
import styled from "styled-components";

export default function DeadlineSelector() {
  return (
    <div>
      <StyledButton>24시간</StyledButton>
      <StyledButton>12시간</StyledButton>
      <StyledButton>6시간</StyledButton>
      <StyledButton>3시간</StyledButton>
      <StyledButton>1시간</StyledButton>\
    </div>
  );
}

const StyledButton = styled.button``;
