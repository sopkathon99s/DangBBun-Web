import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function MemberCounting({ handleMemberCount, valueName }) {
  const [memberCount, setMemberCount] = useState(0);
  function onClickButton(memberCount, isPlus) {
    if (isPlus) {
      return ++memberCount;
    } else {
      if (memberCount > 0) {
        return --memberCount;
      } else {
        return memberCount;
      }
    }
  }
  return (
    <StyledMemberCounting>
      <StyledButton
        onClick={() => {
          setMemberCount((memberCount) => onClickButton(memberCount, false));
          handleMemberCount(memberCount, valueName);
        }}>
        -
      </StyledButton>
      <StyledMemberCount>{memberCount}명</StyledMemberCount>
      <StyledButton
        onClick={() => {
          setMemberCount((memberCount) => onClickButton(memberCount, true));
          handleMemberCount(memberCount, valueName);
        }}>
        +
      </StyledButton>
    </StyledMemberCounting>
  );
}

const StyledMemberCounting = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 28px;
  }
`;

const StyledButton = styled.button`
  width: 21px;
  height: 21px;
  border: none;
  border-radius: 50%;
  background: rgba(254, 56, 56, 0.11);
`;

const StyledMemberCount = styled.div``;
