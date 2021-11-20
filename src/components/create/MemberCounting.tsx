import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { ReactComponent as MinusButton } from "../../assets/svg/minusButton.svg";
import { ReactComponent as PlusButton } from "../../assets/svg/plusButton.svg";

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
  useEffect(() => {
    handleMemberCount(memberCount, valueName);
  }, [memberCount]);
  return (
    <StyledMemberCounting>
      <MinusButton
        onClick={() => {
          setMemberCount((memberCount) => onClickButton(memberCount, false));
        }}>
        -
      </MinusButton>
      <StyledMemberCount>{memberCount}명</StyledMemberCount>
      <PlusButton
        onClick={() => {
          setMemberCount((memberCount) => memberCount + 1);
        }}>
        +
      </PlusButton>
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

const StyledMemberCount = styled.div`
  color: ${theme.color.red};
  font-weight: bold;
  font-size: 14px;
`;
