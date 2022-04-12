import React from 'react'
import ListaServicos from '../../components/ListaServicos/ListaServicos'
import Naruto from '../../assets/img/Naruto.png'
import lupa from '../../assets/img/lupa.png'
import {MainContainer, CardNaruto, Busca} from './styled'

class Inicial extends React.Component {
    render(){
        return(
            <MainContainer>
                <CardNaruto>
                    <div className='chamada1'>
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