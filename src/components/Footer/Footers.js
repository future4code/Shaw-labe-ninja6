import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

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
            
              <a href="facebook.com"><FacebookIcon/></a>
          
            
              <a href="linkedin.com"><LinkedInIcon/></a>
          
            
              <a href="instagram.com"><InstagramIcon/></a>
          
            
              <a href="twitter.com"><TwitterIcon/></a>
          
          </ListaIcones>
        </Titulo>
      </Footer>
    );
  }
}
