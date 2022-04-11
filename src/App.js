import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
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
		return (
			<MainContainer>
				<Header>

				</Header>
				<Main>
				
				</Main>
				<Footer>

				</Footer>
			</MainContainer>
		)
	}
}

export default App
