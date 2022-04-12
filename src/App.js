import React from 'react'
import styled from 'styled-components'
import ListaServicos from './components/ListaServicos/ListaServicos'
import { header,url } from './constants/authorization'
import Inicial from './pages/Inicial/Inicial'
// import Headers from './components/Headers/Headers'

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* height: 100vh; */
	width: 100vw;
`
const Header = styled.div`
	width: 100%;
	height: 100px;
	background-color: lightgray;
`
const Main = styled.div`
	width: 100%;
`
const Footer = styled.div`
	width: 100%;
	height: 100px;
	background-color: lightgray;
`

class App extends React.Component {

	render(){
		console.log(header);
		console.log(url);
		return (
			<MainContainer>
				<Header>
				{/* <Headers/> */}
				</Header>
				<Main>
					<Inicial>

					</Inicial>
				</Main>
				<Footer>

				</Footer>
			</MainContainer>
		)
	}
}

export default App
