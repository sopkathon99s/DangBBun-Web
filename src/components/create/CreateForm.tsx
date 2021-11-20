import React, { useState } from "react";
import FormCell from "./FormCell";
import styled from "styled-components";
import CreateInput from "./CreateInput";
import FormMemberCell from "./FormMemberCell";
import MemberCounting from "./MemberCounting";
import DeadlineSelector from "./DeadlineSelector";

export default function CreateForm() {
  const [bungeaInfo, setBungeaInfo] = useState({ place: "" });
  function handleCreateInput(e, valueName) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, [valueName]: e.target.value }));
  }
  function handleMemberCount(memberCount, valueName) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, [valueName]: memberCount }));
  }
  console.log(bungeaInfo);
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
        <DeadlineSelector />
      </FormCell>
      <label>
        <input type="checkbox" /> 익명 여부
      </label>
      <input type="text" />
      <textarea />
      <button>뻔개 등록하기</button>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  & > *:nth-child(8) {
    margin-bottom: 15px;
  }
  & > *:nth-child(7) {
    margin-bottom: 13px;
  }
`;
