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
    <StyledMemberInput>
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
    </StyledMemberInput>
  );
}

const StyledMemberInput = styled.div``;

const StyledButton = styled.button``;

const StyledMemberCount = styled.div``;
