import React from "react";
import styled from "styled-components";

import { SocialIcon } from 'react-social-icons';

const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: lightgray;
`;
const Titulo = styled.div`
  display: flex;
  
  margin-left: 70%;
  align-items: center;
`;

const ListaIcones = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  
`;



export class Footers extends React.Component {
  render() {
      
    return (
      <Footer>
        <Titulo>
          <h3>Siga-nos nas nossas redes sociais</h3>
          <ListaIcones>
            
          <SocialIcon url="https://facebook.com" />
          
            
              <SocialIcon url="https://linkedin.com" />
          
            
              <SocialIcon url="https://instagram.com" />
          
            
              <SocialIcon url="https://twitter.com" />


          
          </ListaIcones>
        </Titulo>
      </Footer>
    );
  }
}
