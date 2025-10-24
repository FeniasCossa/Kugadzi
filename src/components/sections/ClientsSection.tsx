import React from 'react';
import styled from 'styled-components';

const ClientsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const ClientsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
`;

const ClientsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ClientLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  
  img {
    max-width: 180px;
    max-height: 80px;
    transition: all 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    height: 80px;
    
    img {
      max-width: 150px;
      max-height: 65px;
    }
  }
`;

const ClientsSection: React.FC = () => {
  return (
    <ClientsContainer id="clients">
      <ClientsContent>
        <SectionTitle>Nossos Clientes</SectionTitle>
        
        <ClientsGrid>
          <ClientLogo>
            <img src="/assets/images/clients/mais-valor.png" alt="Mais Valor 2" />
          </ClientLogo>
          <ClientLogo>
            <img src="/assets/images/clients/unido.png" alt="UNIDO" />
          </ClientLogo>
          <ClientLogo>
            <img src="/assets/images/clients/oikos.png" alt="OIKOS" />
          </ClientLogo>
          <ClientLogo>
            <img src="/assets/images/clients/aics.png" alt="Agenzia Italiana per la Cooperazione allo Sviluppo" />
          </ClientLogo>
          <ClientLogo>
            <img src="/assets/images/clients/maeci.png" alt="Ministero degli Affari Esteri e della Cooperazione Internazionale" />
          </ClientLogo>
        </ClientsGrid>
      </ClientsContent>
    </ClientsContainer>
  );
};

export default ClientsSection;