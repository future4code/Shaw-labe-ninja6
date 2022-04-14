import React from "react";
import { header, url } from "../../constants/authorization";
import axios from "axios";
import { MainContainer } from "./style"

const inputPagamento = ["Dinheiro", "Cartão", "Pix", "Boleto"];

class Cadastro extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputValor: 0,
    inputPagamento: [],
    inputData: "",
  };

  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };

  onChangeValor = (event) => {
    this.setState({ inputValor: event.target.value });
  };

  onChangePagamento = (event) => {
    const formaPagamento = event.target.value;
    if (!this.state.inputPagamento.includes(formaPagamento)) {
      //se não houver o formaPagamento na array ele insere
      const novoArrayPagamento = [...this.state.inputPagamento, formaPagamento];
      this.setState({ inputPagamento: novoArrayPagamento });
    } else {
      //se houver o formaPagamento no array ele apaga
      const novoArrayPagamento = this.state.inputPagamento.filter(
        (pagamento) => {
          return pagamento !== formaPagamento;
        }
      );
      this.setState({ inputPagamento: novoArrayPagamento });
    }
  };

  onChangeData = (event) => {
    this.setState({ inputData: event.target.value });
  };

  createJob = () => {
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: Number(this.state.inputValor),
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputData,
    };
    axios
      .post(`${url}/jobs`, body, header)
      .then((res) => {
        alert("Serviço inserido com sucesso!");
        this.setState({
          inputTitulo: "",
          inputDescricao: "",
          inputValor: 0,
          inputPagamento: [],
          inputData: "",
        });
      })
      .catch((err) => {
        alert("Houve algum erro, tente novamente!");
      });
  };

  render() {
    const pagamento = inputPagamento.map((name) => {
      return (
        <option key={name} value={name}>
          {name}
        </option>
      );
    });
    return (
      <MainContainer>
        <h1>Cadastre seu serviço</h1>
        <div>
          <input
            placeholder="Título"
            value={this.state.inputTitulo}
            onChange={this.onChangeTitulo}
          />

          <input
            placeholder="Descrição"
            value={this.state.inputDescricao}
            onChange={this.onChangeDescricao}
          />
          <input
            type="number"
            placeholder="Valor"
            value={this.state.inputValor}
            onChange={this.onChangeValor}
          />

          <select
            value={this.state.inputPagamento}
            onChange={this.onChangePagamento}
            multiple
          >
            {pagamento}
          </select>

          <input
            type="date"
            value={this.state.inputData}
            onChange={this.onChangeData}
          />
          <button onClick={this.createJob}>Cadastrar Serviço</button>
          <button onClick={this.props.trocarPagina}>Voltar</button>
        </div>
      </MainContainer>
    );
  }
}

export default Cadastro;
