import React from "react";
import styled from "styled-components";
import ListaServicos from "./components/ListaServicos/ListaServicos";
import { header, url } from "./constants/authorization";
import Inicial from "./pages/Inicial/Inicial";
import Headers from "./components/Headers/Headers";
import { Footers } from "./components/Footer/Footers";
import Carrinho from "./components/Carrinho/Carrinho";
import Cadastro from "./pages/Cadastro/Cadastro";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100vh; */
  width: 100vw;
`;
// const Header = styled.div`
// 	width: 100%;
// 	height: 100px;
// 	background-color: lightgray;
// `
const Main = styled.div`
  width: 100%;
`;
// const Footer = styled.div`
// 	width: 100%;
// 	height: 100px;
// 	background-color: lightgray;
// `

class App extends React.Component {
  state = {
    // paginaAtual: "home",
    trocarPagina: true,
  };

  trocarPagina = () => {
    this.setState({ trocarPagina: !this.state.trocarPagina})
  }
    

  render() {
    const paginaAtual = this.state.trocarPagina ? <Inicial /> : <Cadastro trocarPagina={this.trocarPagina}/>


    return (
      <MainContainer>
        <Headers trocarPagina={this.trocarPagina}/>
        <Main>
			  {paginaAtual}
			
          {/* <Inicial></Inicial> */}
        </Main>
        <Footers></Footers>
      </MainContainer>
    );
  }
}

export default App;
