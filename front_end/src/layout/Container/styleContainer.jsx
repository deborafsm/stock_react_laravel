import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color:white;
    color: black;
    padding: 20px;
    margin:10px auto;
    height: calc:(100vh - 27px);
    overflow-y: scroll;
    width: 170vh;
    
    
    
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color:#C1F4C5;
        border-radius: 20px:
    }
    ::-webkit-scrollbar-track{
        background-color:white;
        
    }
`;
export default Container;

// height: calc:(100vh - 70px);
