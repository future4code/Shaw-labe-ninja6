import React from 'react'
import axios from "axios";
import { header, url } from "../../constants/authorization";
import ListaServicos from '../../components/ListaServicos/ListaServicos'
import Naruto from '../../assets/img/Naruto.png'
import lupa from '../../assets/img/lupa.png'
import { MainContainer, CardNaruto, Busca } from './styled'

class Inicial extends React.Component {
    state = {
        servicos: [],
        min: "",
        max: "",
        nome: "",
        ordem: 1,
        valorDeSorteio: "titulo"
    }
    componentDidMount() {
        this.pegaLista()
    }
    pegaLista = () => {
        axios.get(`${url}/jobs`, header).then((resp) => {
            this.setState({ servicos: resp.data.jobs })
            console.log(resp.data.jobs)
            console.log(this.state.servicos)
        }).catch((erro) => {
            console.log(erro)
        })
    };
    onChangeMin = (eve) => {
        this.setState({ min: eve.target.value });
        console.log(this.state.min)
    };
    onChangeMax = (eve) => {
        this.setState({ max: eve.target.value });
    };
    onChangeNome = (eve) => {
        this.setState({ nome: eve.target.value });
    };

    onChangeOrdem = (eve) => {
        this.setState({ ordem: eve.target.value });
        console.log(this.state.ordem);
    };
    onChangeSorteio = (eve) => {
        this.setState({ valorDeSorteio: eve.target.value });
    };

    render() {

        return (
            <MainContainer>
                <CardNaruto>
                    <div className='chamada1'>
                        <h1>Sempre há um ninja próximo de você, descubra qual pode te ajudar!</h1>
                        <Busca>
                            <img src={lupa} />
                            <input
                                placeholder={"O que você procura?"}
                                type="text"
                                value={this.state.nome}
                                onChange={this.onChangeNome}
                            />

                        </Busca>
                    </div>
                    <img className='naruto' src={Naruto} />
                </CardNaruto>
                <ListaServicos
                    servicos={this.state.servicos}
                    min={this.state.min}
                    max={this.state.max}
                    nome={this.state.nome}
                    ordem={this.state.ordem}
                    valorDeSorteio={this.state.valorDeSorteio}
                    onChangeOrdem={this.onChangeOrdem}
                    onChangeSorteio={this.onChangeSorteio}
                    onChangeMin={this.onChangeMin}
                    onChangeMax={this.onChangeMax}
                    onChangeNome={this.onChangeNome}
                />
            </MainContainer>
        )
    }
}
export default Inicial