import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #1a73e8, #34a853);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const AboutText = styled.div`
  margin-bottom: 3rem;
  line-height: 1.8;
  color: #555;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a73e8;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>Sobre a Empresa</SectionTitle>
        <AboutText>
          <p>
            A Kugadzi Consultoria é uma empresa especializada em soluções integradas de consultoria e formação, 
            comprometida em oferecer serviços de alta qualidade que impulsionam o crescimento e o sucesso dos nossos clientes.
          </p>
        </AboutText>
        
        <ValuesContainer>
          <ValueCard>
            <ValueTitle>Missão</ValueTitle>
            <ValueDescription>
              Fornecer soluções de consultoria e formação que capacitem nossos clientes a alcançar excelência operacional, 
              conformidade regulatória e crescimento sustentável, através de uma abordagem personalizada e inovadora.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueTitle>Visão</ValueTitle>
            <ValueDescription>
              Ser reconhecida como referência em consultoria e formação em Moçambique, 
              destacando-se pela excelência, inovação e pelo impacto positivo gerado nos negócios dos nossos clientes e na sociedade.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueTitle>Valores</ValueTitle>
            <ValueDescription>
              Integridade, Excelência, Inovação, Compromisso com o cliente, Responsabilidade social e Desenvolvimento contínuo 
              são os pilares que orientam nossas ações e decisões diárias.
            </ValueDescription>
          </ValueCard>
        </ValuesContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;