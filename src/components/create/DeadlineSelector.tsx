import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export default function DeadlineSelector({ handleDeadline }) {
  const [selected, setSelected] = useState(-1);
  function onClickButton(deadline) {
    setSelected(deadline);
    handleDeadline(deadline);
  }
  return (
    <StyledDeadlineSelector>
      <StyledButton selected={selected === 24} onClick={() => onClickButton(24)}>
        24시간
      </StyledButton>
      <StyledButton selected={selected === 12} onClick={() => onClickButton(12)}>
        12시간
      </StyledButton>
      <StyledButton selected={selected === 6} onClick={() => onClickButton(6)}>
        6시간
      </StyledButton>
      <StyledButton selected={selected === 3} onClick={() => onClickButton(3)}>
        3시간
      </StyledButton>
      <StyledButton selected={selected === 1} onClick={() => onClickButton(1)}>
        1시간
      </StyledButton>
    </StyledDeadlineSelector>
  );
}

const StyledDeadlineSelector = styled.div`
  width: 100%;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button<{ selected: boolean }>`
  ${(props) =>
    props.selected === true &&
    css`
      color: white;
      background: ${theme.color.red};
    `}
  ${(props) =>
    props.selected === false &&
    css`
      background: rgba(0, 0, 0, 0.03);
    `}
  border-radius: 40px;
  border: none;
  width: 65px;
  height: 24px;
  font-size: 11px;
  padding-bottom: 4px;
`;
