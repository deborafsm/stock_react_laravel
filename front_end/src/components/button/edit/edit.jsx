import { BsFillPenFill } from "react-icons/bs";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 2%;
  border-radius: 20px;
  cursor: pointer;
  margin: 5px;
`;

function Edit() {
  return (
    <StyledButton>
      <BsFillPenFill />
    </StyledButton>
  );
}

export default Edit;
