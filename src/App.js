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
    paginaAtual: "home",
  };


  irParainicial = () => {
    this.setState({ paginaAtual: "home" });
  };

  irParaCadastro = () => {
    this.setState({ paginaAtual: "cadastro" });
  };

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case "home":
        return <Cadastro irParaCadastro={this.irParaCadastro} />;
        break;
		case "cadastro":
			return <Inicial irParaHome={this.irParaHome}/>
      default:
        return "Erro página não encontrada"
        break;
    }
  };

  

  render() {
    console.log(this.renderizaPagina);

    // console.log(header);
    // console.log(url);
    return (
      <MainContainer>
        <Headers />
		{this.renderizaPagina()}
		<Cadastro/>
        <Main>
			

			
			
			
          <Inicial></Inicial>
        </Main>
        <Footers></Footers>
      </MainContainer>
    );
  }
}

export default App;
