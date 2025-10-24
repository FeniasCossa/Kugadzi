import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeroContainer = styled.section`
  height: 100vh;
  background-image: url('/src/assets/images/hero-bg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    padding: 0 5%;
    height: auto;
    min-height: 100vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  max-width: 600px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem 0;
  }
`;

const CompanyName = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Slogan = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

const Button = styled(Link)<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
;
  
  background-color: ${props => props.$primary ? '#1a73e8' : 'transparent'};
  color: white;
  border: ${props => props.$primary ? 'none' : '2px solid white'};
  
  &:hover {
    background-color: ${props => props.$primary ? '#0d62c9' : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <CompanyName>Kugadzi Consultoria</CompanyName>
        <Slogan>Soluções Integradas em Consultoria e Formação</Slogan>
        <ButtonContainer>
          <Button to="about" smooth={true} duration={500} $primary>
            Saiba Mais
          </Button>
          <Button to="contact" smooth={true} duration={500}>
            Contacte-nos
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;