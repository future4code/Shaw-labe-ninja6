import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// const Icone = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin: 50px;
// `;
const Titulo = styled.div`
  margin: 40px;
`;
const Ninja = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    margin-right: 30px;
`;

class Headers extends React.Component {
  
  render() {    
    return (
      <Header>
        <Titulo>
          <h1>LabeNinjas</h1>
        </Titulo>
        <Ninja>
          <h3 onClick={this.props.trocarPagina}>Seja um Ninja</h3>
          <ShoppingCartIcon fontSize="large" />
        </Ninja>
        {/* <Icone>
          
        </Icone> */}
      </Header>
    );
  }
}

export default Headers;
