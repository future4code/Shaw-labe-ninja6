import React from "react";
import styled from "styled-components";
import { header,url } from "../../constants/authorization"
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 5px;
    }
  }
`;

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
      const novoArrayPagamento = [...this.state.inputPagamento, formaPagamento];
      this.setState({ inputPagamento: novoArrayPagamento });
    } else {
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
    console.log("chamou aq")
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: this.state.inputValor,
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputData,
    };
    axios.post(`${url}/jobs`, body, header)
    .then(res => { 
      alert (`${res}`)
    })
    .catch(err =>{
      alert (`${err.response}`)
    })
  }

  render() {
    return (
      <MainContainer>
        <h1>Cadastre seu serviço</h1>
        <form>
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
          <div>
            <legend>Formas de pagamentos</legend>
            <input
              type="checkbox"
              value="Dinheiro"
              onChange={this.onChangePagamento}
            />
            <label>Dinheiro</label>
            <input
              type="checkbox"
              value="Cartão"
              onChange={this.onChangePagamento}
            />
            <label>Débito</label>
            <input
              type="checkbox"
              value="Crédito"
              onChange={this.onChangePagamento}
            />
            <label>Crédito</label>
            <input
              type="checkbox"
              value="Pix"
              onChange={this.onChangePagamento}
            />
            <label>Pix</label>
            <input
              type="checkbox"
              value="Boleto"
              onChange={this.onChangePagamento}
            />
            <label>Boleto</label>
          </div>
          <input
            type="date"
            value={this.state.inputData}
            onChange={this.onChangeData}
          />
          <button onClick={this.createJob}>Cadastrar serviço</button>
        </form>
      </MainContainer>
    );
  }
}

export default Cadastro;
