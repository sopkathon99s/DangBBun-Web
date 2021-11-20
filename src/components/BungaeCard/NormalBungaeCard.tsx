import { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

import { ReactComponent as DownArrow } from "../../assets/downArrow.svg";

interface NormalBungaeCardProps {
  status: string;
  hurryMessage: string;
  title: string;
  minMember: number;
  maxMember: number;
  currentMember: number;
  meetDate: string;
  location: string;
  description: string;

  applied: boolean;
}

export function NormalBungaeCard(props: NormalBungaeCardProps) {
  const { status, applied, hurryMessage, title, minMember, maxMember, currentMember, meetDate, location, description } =
    props;

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <StyledBungaeCard>
      <PeopleLeft>{status}</PeopleLeft>

      <BungaeCardInner>
        {applied ? <EndedBanner>신청완료</EndedBanner> : <Hurry>{hurryMessage}</Hurry>}

        <Title>{title}</Title>
        <WhenWhereLabel>
          <span>언제</span> 만나요?
        </WhenWhereLabel>
        <WhenWhereContent>{meetDate}</WhenWhereContent>

        <WhenWhereLabel>
          <span>어디서</span> 만나요?
        </WhenWhereLabel>
        <WhenWhereContent>{location}</WhenWhereContent>

        <PeopleCountBox>
          <CurrentSubmitLabel>현재 {currentMember}명</CurrentSubmitLabel>
          <TotalSubmitLabel>
            {minMember}~{maxMember}명 정원
          </TotalSubmitLabel>
        </PeopleCountBox>
        <SubmitAreaBox>
          <div></div>
          {applied ? <SubmitButton disabled>안 갈래요...</SubmitButton> : <SubmitButton>나도 데려가~</SubmitButton>}
        </SubmitAreaBox>

        {isOpen && <Details>{description}</Details>}
      </BungaeCardInner>
      <ToggleButton onClick={handleToggle} isOpen={isOpen}>
        <DownArrow />
      </ToggleButton>
    </StyledBungaeCard>
  );
}

const StyledBungaeCard = styled.article`
  position: relative;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.29);
  border-radius: 12px 0 12px 12px;
`;

const PeopleLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: -2rem;
  right: 0;

  min-width: 9rem;
  height: 2rem;

  background-color: ${theme.color.red};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.29);
  border-radius: 12px 12px 0px 0px;
  color: white;

  font-weight: bold;
`;

const BungaeCardInner = styled.div`
  padding-top: 1.4rem;
  padding-left: 1.7rem;
  padding-right: 1.7rem;
`;

const Hurry = styled.h4`
  color: #0057ff;
  line-height: 1.4rem;
  height: 1.8rem;
  padding-bottom: 0.2rem;
`;

const EndedBanner = styled.div`
  height: 1.8rem;
  width: 6rem;
  color: white;
  background-color: #4a4a4a;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  line-height: 1rem;
`;

const Title = styled.header`
  font-size: 1.9rem;
  font-weight: bold;

  margin-top: 0.3rem;
`;

const WhenWhereLabel = styled.div`
  font-size: 1rem;

  margin-top: 0.8rem;

  & > span {
    font-weight: bold;
    color: ${theme.color.red};
  }
`;

const WhenWhereContent = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  margin-top: 0.4rem;

  color: ${theme.color.gray};
`;

const PeopleCountBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 1.2rem;
`;

const CurrentSubmitLabel = styled.div`
  font-weight: bold;
  font-size: 1.2rem;

  color: ${theme.color.red};
`;

const TotalSubmitLabel = styled.span`
  font-weight: normal;
  font-size: 1rem;

  margin-left: 0.7rem;

  color: rgba(0, 0, 0, 0.44);
`;

const ButtonBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4rem;

  font-size: 1.3rem;
  font-weight: bold;
`;

const SubmitAreaBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;

  margin-top: 0.7rem;
`;

const SubmitButton = styled(ButtonBase)<{ disabled?: boolean }>`
  color: white;
  background-color: ${theme.color.red};

  align-self: stretch;
  width: 13.8rem;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #4a4a4a;
      color: white;
    `}
`;

const Details = styled.div`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 4px;

  margin-top: 1.4rem;

  word-wrap: wrap;
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  margin-top: 1.2rem;

  background: rgba(196, 196, 196, 0.15);
  border-radius: 0px 0px 12px 12px;

  border: none;
  outline: none;

  width: 100%;

  & > svg {
    ${(props) =>
      props.isOpen
        ? css`
            transform: rotate(180deg);
          `
        : ""}
  }
`;
