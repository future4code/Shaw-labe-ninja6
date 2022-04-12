import Axios from 'axios';
import React from 'react'
import {url,header} from '../../constants/authorization'
import carrinho from '../../assets/img/carrinho.png'
import {MainContainer, CardBox} from './styled'

class ListaServicos extends React.Component {
    state ={
        servicos: [],
    }
    componentDidMount(){
        this.pegaLista()
    }
    conversorData = (data) => { //a data originalmente vem muito extensa
        const dia = data.substring(8, 10) //então pegamos esse valor e 
        const mes = data.substring(5, 7) //cortamos oque vem antes e depois 
        const ano = data.substring(0, 4) //dos valores que precisamos
        return `${dia}/${mes}/${ano}`//e retornamos eles com as barras de datas
    }
    pegaLista = () => {
        Axios.get(`${url}/jobs`,header).then((resp) => {
            this.setState({servicos: resp.data.jobs})
            console.log(resp.data.jobs)
        }).catch((erro) => {
            console.log(erro)
        })
    };

	render(){

        const listaDeServicos = this.state.servicos.map((servico) => {
            return(
                <CardBox>
                    <h2>{servico.title}</h2>
                    <p>Disponivel até {this.conversorData(servico.dueDate)}</p>
                    <p>Por apenas R$ {servico.price.toFixed(2)}</p> {/*toFixed(2) faz aparecer até duas casas decimais após o valor, sendo util até para valores em centavos*/}
                    <div>
                        <button>Mais Detalhes</button>
                        <img src={carrinho}/>
                    </div>
                </CardBox>              
            )
        })

        console.log(this.state.servicos)
		return (
			<MainContainer>
                {listaDeServicos}
			</MainContainer>
		)
	}
}

export default ListaServicos