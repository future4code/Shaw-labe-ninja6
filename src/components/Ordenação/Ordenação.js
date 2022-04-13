import Axios from 'axios';
import React from 'react';
import { url, header } from '../../constants/authorization'




class Ordenação extends React.Component {


    render() {

        return (

            <div>
                <label for="sort">Ordenação: </label>
                <select
                    name="sort"
                    value={this.props.valorDeSorteio}
                    onChange={this.props.onChangeSorteio}
                >
                    <option value="titulo">Título</option>
                    <option value="preço">Preço</option>
                    <option value="data">Prazo</option>
                </select>
                <select
                    name="ordem"
                    value={this.props.ordem}
                    onChange={this.props.onChangeOrdem}
                >
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decrescente</option>

                </select>

            </div>
        )
    }
}





export default Ordenação