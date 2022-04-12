import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components'


const Header = styled.div`
	width: 100%;
	height: 100px;
	background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Icone = styled.div`
display: flex;
flex-direction: row;
align-items: center;



margin: 50px;

`

const Titulo = styled.div`

margin: 40px;

`

const Ninja = styled.div`

padding-left: 60%;
`


class Headers extends React.Component{
    
    render(){
        return<Header>
            <Titulo>
            <h1>LabeNinjas</h1>
            </Titulo>
           <Ninja><h2>Seja um Ninja</h2></Ninja>
            <Icone>
                
            <ShoppingCartIcon fontSize="large"/>
            </Icone>
            </Header>

    }
}


export default Headers