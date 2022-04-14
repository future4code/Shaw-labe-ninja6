import axios from "axios";
import React from "react";
import Filtro from "../FiltrosDeBusca/FiltrosDeBusca";
import { url, header } from "../../constants/authorization";
import carrinho from "../../assets/img/carrinho.png";
import { MainContainer, CardBox, ListaServico } from "./styled";
import Ordenação from "../Ordenação/Ordenação";

class ListaServicos extends React.Component {
  conversorData = (data) => {
    //a data originalmente vem muito extensa
    const dia = data.substring(8, 10); //então pegamos esse valor e
    const mes = data.substring(5, 7); //cortamos oque vem antes e depois
    const ano = data.substring(0, 4); //dos valores que precisamos
    return `${dia}/${mes}/${ano}`; //e retornamos eles com as barras de datas
  };

  render() {
    const listaDeServicos = this.props.servicos
      .filter((servico) => {
        return this.props.min === "" || servico.price >= this.props.min;
      })
      .filter((servico) => {
        return this.props.max === "" || servico.price <= this.props.max;
      })
      .filter((servico) => {
        return servico.title
          .toLowerCase()
          .includes(this.props.nome.toLowerCase());
      })
      .sort((a, b) => {
        switch (this.props.valorDeSorteio) {
          case "titulo":
            return this.props.ordem * a.title.localeCompare(b.title);
          case "data":
            return (
              this.props.ordem *
              (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
            );
          default:
            return this.props.ordem * (a.price - b.price);
        }
      })

      .map((servico) => {
        return (
          <CardBox>
            <h2>{servico.title}</h2>
            <p>Disponivel até {this.conversorData(servico.dueDate)}</p>
            <p>Por apenas R$ {servico.price.toFixed(2)}</p>{" "}
            {/*toFixed(2) faz aparecer até duas casas decimais após o valor, sendo util até para valores em centavos*/}
            <div>
              <button>Mais Detalhes</button>
              <img
                onClick={() => this.props.adicionaCarrinho(servico.id)}
                src={carrinho}
              />
            </div>
          </CardBox>
        );
      });
    return (
      <MainContainer>
        <div>
          <Filtro
            servicos={this.props.servicos}
            min={this.props.min}
            max={this.props.max}
            nome={this.props.nome}
            onChangeMin={this.props.onChangeMin}
            onChangeMax={this.props.onChangeMax}
            onChangeNome={this.props.onChangeNome}
            filtros={this.props.filtros}
          />
          <Ordenação
            ordem={this.props.ordem}
            valorDeSorteio={this.props.valorDeSorteio}
            onChangeOrdem={this.props.onChangeOrdem}
            onChangeSorteio={this.props.onChangeSorteio}
          />
        </div>
        <ListaServico>{listaDeServicos}</ListaServico>
      </MainContainer>
    );
  }
}

export default ListaServicos;
