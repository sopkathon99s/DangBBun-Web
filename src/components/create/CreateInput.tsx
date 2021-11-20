import styled from "styled-components";

export default function CreateInput({ valueName, handleCreateInput, type, placeholder }) {
  return <StyledCreateInput type={type} onChange={(e) => handleCreateInput(e, valueName)} placeholder={placeholder} />;
}

const StyledCreateInput = styled.input``;
