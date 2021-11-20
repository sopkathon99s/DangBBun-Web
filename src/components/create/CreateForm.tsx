import React, { useState } from "react";
import FormCell from "./FormCell";
import styled from "styled-components";
import CreateInput from "./CreateInput";

export default function CreateForm() {
  const [bungeaInfo, setBungeaInfo] = useState({});
  function handleCreateInput(e, valueName) {
    setBungeaInfo((bungeaInfo) => ({ ...bungeaInfo, [valueName]: e.target.value }));
  }
  console.log(bungeaInfo);
  return (
    <StyledCreateForm>
      <FormCell label="장소 입력">
        <CreateInput type="text" handleCreateInput={handleCreateInput} valueName="place" placeholder="텍스트" />
      </FormCell>
      <FormCell label="모임 날짜 입력">
        <CreateInput type="date" handleCreateInput={handleCreateInput} valueName="date" placeholder="텍스트" />
      </FormCell>
      <FormCell label="모임 시간 입력">
        <CreateInput type="time" handleCreateInput={handleCreateInput} valueName="time" placeholder="텍스트" />
      </FormCell>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.div``;
