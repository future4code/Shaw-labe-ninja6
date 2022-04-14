import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    .conteudo{
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        .X{
        cursor: pointer;
        position: absolute;
        top: 305px;
        right: 115px;
        width: 32px;
        height: 32px;
        padding: 0;
        /* z-index: 1; */
    }
    }
    button{
        cursor: pointer;
    }
`

class Modal extends React.Component {
            
    render() {
        return(
            <MainContainer>  
                <div className='conteudo'>
                    <h1>{this.props.detalhe.title}</h1>
                    <p>Seviço disponivel até:</p>
                    {this.props.mostraDetalhe === !false ? (
                        <div>                                     
                        {this.props.conversorData(this.props.detalhe.dueDate)}
                        </div>
                    ):(<></>)}
                    <p>Por apenas {this.props.detalhe.price.toFixed(2)}</p>
                    <p>Aceita pagamentos em:</p>
                    {this.props.mostraDetalhe === !false ? (
                        <div>                                     
                            {this.props.detalhe.paymentMethods.map((pagar) => {
                            return <p>{pagar}</p> })}               
                        </div>
                    ):(<></>)}
                    <p>Descrição:</p>
                    <p>{this.props.detalhe.description}</p>
                    <button>Adicionar ao Carrinho</button>
                    <button
                        onClick={this.props.voltaLista}
                    >Voltar para a lista</button>
                    <button 
                        className='X'
                        onClick={this.props.voltaLista}
                    > X </button>
                </div>       
            </MainContainer>
        )
    }
}
export default Modal