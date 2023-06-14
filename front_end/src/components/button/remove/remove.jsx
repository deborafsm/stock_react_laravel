import {  BsFillTrashFill} from "react-icons/bs";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: red;
  color: white;
  padding: 2%;
  border-radius: 20px;
  cursor: pointer;
`;

function Remove() {
  return <StyledButton><BsFillTrashFill/></StyledButton>;
}

export default Remove;
