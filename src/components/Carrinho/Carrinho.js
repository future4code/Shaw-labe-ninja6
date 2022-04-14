import axios from "axios";
import React from "react";
import { url, header } from "../../constants/authorization";
import { MainContainer } from "./CarrinhoEstilo";

export default class Carrinho extends React.Component {
  render() {
    const mapCarrinho = this.props.listaCarrinho.map((servicos) => {
      return (
        <div>
          <table>
            <tr>
              <th>Serviço {servicos.title}</th>
              <th>Preço unitário{servicos.price}</th>
            </tr>
          </table>
          <div>
            <button onClick={() => this.props.removeServico(servicos.id)}>X</button>
          </div>
        </div>
      );
    });

    const Total = this.props.listaCarrinho.reduce(
      (anterior, item) => item.price + anterior,
      0
    );

    return (
      <MainContainer>
        <div className="conteudo">
          <div>
             <h4>Carrinho</h4>
          </div>
            <div>{mapCarrinho}</div>
            <div> Total: R$ {Total},00</div>
           <div>
            <button onClick={() => this.props.removeTodosOsServicos()}>
            Remover todos os serviços
            </button>
            <button onClick={() => this.props.finalizarCompra()}>
              Finalizar contratação
            </button>
            <button onClick={this.props.voltaCarrinho}>Continuar comprando</button>
          </div>
        </div>
      </MainContainer>
    );
  }
}
