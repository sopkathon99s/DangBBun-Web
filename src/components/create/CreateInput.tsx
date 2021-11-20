import styled from "styled-components";

interface CreateInputProps {
  valueName: string;
  handleCreateInput(e: React.ChangeEvent<HTMLInputElement>, valueName: string): void;
  type: string;
  placeholder?: string;
}

export default function CreateInput(props: CreateInputProps) {
  const { valueName, handleCreateInput, type, placeholder = "" } = props;
  // function DATE_TEMPLATE(date) {
  //   `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  // }
  return <StyledCreateInput type={type} onChange={(e) => handleCreateInput(e, valueName)} placeholder={placeholder} />;
}

const StyledCreateInput = styled.input`
  width: 100%;
  height: 28px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 40px;
  border: none;
  padding: 8px;
  font-family: inherit;
  font-size: 11px;
`;
