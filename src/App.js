import React from 'react'
import styled from 'styled-components'
import { header,url } from './constants/authorization'
import Cadastro from './pages/Cadastro/Cadastro'
import Inicial from './pages/Inicial/Inicial'
import Headers from './components/Headers/Headers'
import {Footers} from './components/Footer/Footers'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
`;
 const Header = styled.div`
 	width: 100%;
 	height: 120px;
   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  border-bottom: 3px solid yellow;
 `
const Main = styled.div`
  width: 100%;
`;
 const Footer = styled.div`
 	width: 100%;
`

class App extends React.Component {
  state = {
    // paginaAtual: "home",
    trocarPagina: true,
  };

  trocarPagina = () => {
    this.setState({ trocarPagina: !this.state.trocarPagina})
  }
  home =() => {
    this.setState({ trocarPagina: true})
  }
    
  render() {
    const paginaAtual = this.state.trocarPagina ? <Inicial /> : <Cadastro trocarPagina={this.trocarPagina}/>

    return (
      <MainContainer>
        <Header>
					<Headers trocarPagina={this.trocarPagina} home={this.home}/>
				</Header>
        <Main>
			  {paginaAtual}
        </Main>
        <Footer>
					<Footers/>
				</Footer>
      </MainContainer>
    );
  }
}

export default App;
