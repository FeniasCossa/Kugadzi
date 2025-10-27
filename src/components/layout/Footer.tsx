import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 3rem 2rem 1.5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterColumn = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #1a73e8;
  }
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a73e8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a73e8;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Kugadzi Consultoria</FooterTitle>
          <p>Soluções Integradas em Consultoria e Formação</p>
          <p>NUIT: 401505598,</p>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Links Úteis</FooterTitle>
          <FooterLink href="#">Início</FooterLink>
          <FooterLink href="#">Sobre Nós</FooterLink>
          <FooterLink href="#">Serviços</FooterLink>
          <FooterLink href="#">Contactos</FooterLink>
          <FooterLink href="/trabalhos-realizados">Trabalhos realizados</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLink href="#">Consultoria Ambiental</FooterLink>
          <FooterLink href="#">Consultoria Científica</FooterLink>
          <FooterLink href="#">Consultoria Socioeconómica</FooterLink>
          <FooterLink href="#">Formação e Treinamento</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contactos</FooterTitle>
          <p>Pemba, Moçambique</p>
          <p>Email: info@kugadzi.co.mz</p>
          <p>Tel: +258 84 000 0000</p>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} Kugadzi Consultoria. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;