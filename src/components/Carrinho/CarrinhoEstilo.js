import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
position: fixed;
z-index: 1;
overflow: auto;
width: 100%;
height: 100%;
left: 0;
top: 0;
background-color: rgb(0, 0 ,0);
background-color: rgba(0, 0, 0, 0.4);
.conteudo{
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border:1px solid #888;
    border-radius: 15px;
    width: 80%;
    color: #074f8f;
}
`