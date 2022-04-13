import axios from 'axios';
import React from 'react'
import { header, url } from "../../constants/authorization";
import styled from 'styled-components'

const MainContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
    align-items: center;
    width: 95%;
    margin: 20px;
    button{
        cursor: pointer;
    }
`

class Detalhes extends React.Component {
    conversorData =  (data) => {
            const dia =  data.substring(8,10)
            const mes =  data.substring(5,7)
            const ano =  data.substring(0,4)
            return `${dia}/${mes}/${ano}` 
    }
    componentDidUpdate(){
        // this.listaPagamento()
    }
    // listaPagamento = () => { 
    //     if(this.props.detalhe === {}){
    //             console.log('Sem detalhes')
    //     } else {
    //         console.log('detalhes aqui')
    //         // const pagamentos = this.props.detalhe.paymentMethods.map((metodos) => {
    //         //     return(
    //         //         <p>{metodos}</p> 
    //         //     )
    //         // }) 
    //     }}
            
    render() {
        // console.log(this.props.formaPagamento)
        // console.log(this.props.servicoId)
        // let listaPagamento = {}
        // if(this.props.mostraDetalhe){
        //     console.log('chegou aqui')
        //     const listaPagamento = this.props.detalhe.paymentMethods.map((pagar) =>{
        //     return <p>{pagar}</p>
        //     })
        //     return listaPagamento
        // } else {
        //     console.log('chegou')
        // }
        
            
        
       
        

        return(
            <MainContainer>
                {this.props.mostraDetalhe === false ? (
                    <div>

                    </div>
                ) : (
                    <div>
                        <h1>{this.props.detalhe.title}</h1>
                        <p>Aceita pagamentos em:</p>
                        {this.props.mostraDetalhe === !false ? (
                            <div>                                     
                                {this.props.detalhe.paymentMethods.map((pagar) => {
                                return <p>{pagar}</p> })}               
                            </div>
                        ):(<></>)}
                        <p>Seviço disponivel até:</p>
                        {this.props.mostraDetalhe === !false ? (
                            <div>                                     
                                {this.conversorData(this.props.detalhe.dueDate)}
                            </div>
                        ):(<></>)}
                        <p>Descrição:</p>
                        <p>{this.props.detalhe.description}</p>
                        <button>Adicionar ao Carrinho</button>
                        <button
                            onClick={this.props.voltaLista}
                        >Voltar para a lista</button>
                    </div>
                )}
            </MainContainer>
        )
    }
}
export default Detalhes