import React from "react";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import lee from '../../assets/img/lee.png'

const Footer = styled.div`
  display: flex;
  width: 100%;
  background-color: lightblue;
`;
const Titulo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
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
    width:150px;
    height:200px;
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
