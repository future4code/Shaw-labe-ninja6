import styled from "styled-components";

 export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 5px;
    }
  }

  select{
    &:hover{
      cursor: pointer;
    }
  }
`;