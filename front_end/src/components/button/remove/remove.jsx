import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  background-color: #dc3545;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

function Remove() {
  return (
    <StyledButton>
      <BsFillTrashFill />
    </StyledButton>
  );
}

export default Remove;
