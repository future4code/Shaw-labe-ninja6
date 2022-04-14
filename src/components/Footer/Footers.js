import React from "react";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import lee from '../../assets/img/lee.png'

const Footer = styled.div`
  display: flex;
  width: 100%;
  color:#074f8f;
  font-size: 21px;
`;
const Titulo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120px;
  align-items: center;
  position:relative;
  top: 130px;
  border-top: 3px solid yellow;
`;

const ListaIcones = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  
`;
const ImagemLee = styled.div`
  display: flex;
  flex-wrap: wrap;
  img{
    position: absolute;
    z-index: 1;
    width:200px;
    height:250px;
    margin-left: 30px;
  }
`
export class Footers extends React.Component {
  render() {
      
    return (
      <Footer>
        <ImagemLee><img src={lee}></img></ImagemLee>
        <Titulo>
          <h3>Siga-nos nas nossas redes sociais</h3>
          <ListaIcones>
            <SocialIcon target="_blank" url="https://facebook.com" />
              <SocialIcon target="_blank" url="https://linkedin.com" />
              <SocialIcon target="_blank" url="https://instagram.com" />
              <SocialIcon target="_blank" url="https://twitter.com" />
          </ListaIcones>
        </Titulo>
      </Footer>
    );
  }
}
