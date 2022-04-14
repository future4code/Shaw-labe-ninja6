import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { header, url } from "../../constants/authorization";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default class Filtro extends React.Component {

  render() {     
    return(
      <MainContainer>
        <div>
          <input
            placeholder={"Valor mínimo"}
            type="number"
            value={this.props.min}
            onChange={this.props.onChangeMin}
          />
        </div>
        <div>
          <input
            placeholder={"Valor máximo"}
            type="number"
            value={this.props.max}
            onChange={this.props.onChangeMax}
          />
        </div>
      </MainContainer>
    );
  }
}
