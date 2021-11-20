import React, { useState, useEffect } from "react";
import FormCell from "./FormCell";
import styled from "styled-components";
import CreateInput from "./CreateInput";
import FormMemberCell from "./FormMemberCell";
import MemberCounting from "./MemberCounting";
import DeadlineSelector from "./DeadlineSelector";
// import { useRef } from "react";

export default function CreateForm() {
  const current = new Date();
  const [bungeaInfo, setBungeaInfo] = useState({
    place: "",
    minMember: 0,
    maxMember: 0,
    date: `${current.getFullYear().toString().padStart(2, "0")}-${(Number(current.getMonth()) + 1)
      .toString()
      .padStart(2, "0")}-${current.getDate().toString().padStart(2, "0")}`,
    time: `${current.getHours().toString().padStart(2, "0")}:${current.getMinutes().toString().padStart(2, "0")}`,
  });

  function handleCreateInput(e, valueName) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, [valueName]: e.target.value }));
    if (valueName === "date" || valueName === "time") {
      setBungeaInfo((bungeaInfo) => ({
        ...bungeaInfo,
        meetingDate: new Date(`${bungeaInfo.date}T${bungeaInfo.time}`),
      }));
    }
  }
  function handleMemberCount(memberCount, valueName) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, [valueName]: memberCount }));
  }
  function handleDeadline(deadline) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, deadline: deadline }));
  }
  function handleIsAnonymous(e) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, isAnonymous: e.target.checked }));
  }
  function handleTitle(e) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, title: e.target.value }));
  }
  function handleContents(e) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, contents: e.target.value }));
  }

  useEffect(() => {
    console.log(bungeaInfo);
  }, [bungeaInfo]);
  return (
    <StyledCreateForm>
      <FormCell label="모임 장소">
        <CreateInput
          type="text"
          handleCreateInput={handleCreateInput}
          valueName="place"
          placeholder="모임 장소를 입력하세요"
        />
      </FormCell>
      <FormCell label="모임 날짜">
        <CreateInput type="date" handleCreateInput={handleCreateInput} valueName="date" />
      </FormCell>
      <FormCell label="모임 시간">
        <CreateInput type="time" handleCreateInput={handleCreateInput} valueName="time" />
      </FormCell>
      <FormMemberCell label="최소 인원">
        <MemberCounting handleMemberCount={handleMemberCount} valueName="minMember" />
      </FormMemberCell>
      <FormMemberCell label="최대 인원">
        <MemberCounting handleMemberCount={handleMemberCount} valueName="maxMember" />
      </FormMemberCell>
      <FormCell label="마감 시간">
        <DeadlineSelector handleDeadline={handleDeadline} />
      </FormCell>
      <StyledFormIsAnonymousCell>
        <label>
          <input type="checkbox" onChange={handleIsAnonymous} /> 익명 여부
        </label>
      </StyledFormIsAnonymousCell>
      <StyledInputTitle type="text" placeholder="제목을 입력하세요" onChange={handleTitle} />
      <StyledTextareaContents placeholder="내용을 입력하세요" onChange={handleContents} />
      <StyledPostButtonWrapper>
        <StyledPostButton onClick={() => console.log(bungeaInfo)}>뻔개 등록하기</StyledPostButton>
      </StyledPostButtonWrapper>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  & > *:nth-child(1),
  & > *:nth-child(2) {
    margin-bottom: 18px;
  }
  & > *:nth-child(3) {
    margin-bottom: 22px;
  }
  & > *:nth-child(4) {
    margin-bottom: 16px;
  }
  & > *:nth-child(5) {
    margin-bottom: 17px;
  }
  & > *:nth-child(6),
  & > *:nth-child(9) {
    margin-bottom: 15px;
  }
  & > *:nth-child(7) {
    margin-bottom: 13px;
  }
  input:focus {
    outline: none;
  }
`;

const StyledFormIsAnonymousCell = styled.div`
  display: flex;
  justify-content: flex-end;
  label {
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  input {
    height: 100%;
    margin-right: 7px;
  }
`;

const StyledInputTitle = styled.input`
  padding: 16px;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledTextareaContents = styled.textarea`
  padding: 12px 16px;
  font-size: 14px;
  height: 245px;
  resize: none;
  border-bottom-left-radius: 11px;
  border-bottom-right-radius: 11px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  &:focus {
    outline: none;
  }
`;

const StyledPostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledPostButton = styled.button`
  background: #fe3838;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  width: 138px;
  height: 28px;
  border: none;
  padding-bottom: 2px;
`;
