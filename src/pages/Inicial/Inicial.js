import React from 'react'
import styled from 'styled-components'
import ListaServicos from '../../components/ListaServicos/ListaServicos'
import Naruto from '../../assets/img/Naruto.png'
import lupa from '../../assets/img/lupa.png'

const MainContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
    align-items: center;
`
const CardNaruto = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
    width: 95%;
    margin-top: 30px;
    div{
        margin-left: 30px;
        margin-top: 30px;
        width:50%;
        left:5%;
        /* position:absolute; */
        /* background-color:lightblue; */
    }
    .naruto{
        margin-top:30px;
        width:50%;
    }
`
const Busca = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    border: 1px solid black;
    /* background-color: lightcoral; */
    border-radius: 10px;
    padding: 15px;
    img{
        width: 30px;
        margin: 0 10px
    }
    input{
        border:0;
        outline:none;
        width:95%;
        padding: 10px;
    }
    button{
        border-radius: 10px;
        padding: 10px;
    }
`

class Inicial extends React.Component {
    render(){
        return(
            <MainContainer>
                <CardNaruto>
                    <div>
                        <h1>Sempre há um ninja próximo de você, descubra qual pode te ajudar!</h1>
                        <Busca>
                            <img src={lupa}/>
                            <input
                                placeholder='O que você procura?'
                            />
                            <button>Buscar</button>
                        </Busca>
                    </div>
                    <img className='naruto' src={Naruto}/>   
                </CardNaruto>
                <ListaServicos/>
            </MainContainer>
        )
    }
}
export default Inicial