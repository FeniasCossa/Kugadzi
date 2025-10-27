import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaLeaf, FaFlask, FaUsers, FaClipboardList, FaUserTie, FaGraduationCap, FaCalculator } from 'react-icons/fa';
import QuoteModal from '../layout/QuoteModal';

const ServicesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const ServicesContent = styled.div`
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

const ServiceCategories = styled.div`
  margin-top: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #1a73e8;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eaeaea;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #34a853;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h4`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.8rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const QuoteButton = styled.button`
  background: linear-gradient(135deg, #1a73e8, #34a853);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(26, 115, 232, 0.3);
  }
`;

const CTAWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eaeaea;
`;

const CTAText = styled.p`
  color: #555;
`;

const CTAButton = styled(RouterLink)`
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #1a73e8, #34a853);
  color: white;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(26, 115, 232, 0.3);
  }
`;

const ServicesSection: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleQuoteClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <SectionTitle>Nossos Serviços</SectionTitle>
        
        <ServiceCategories>
          <CategoryTitle>Consultoria</CategoryTitle>
          <ServicesGrid>
            <ServiceCard>
              <IconWrapper>
                <FaLeaf />
              </IconWrapper>
              <ServiceTitle>Ambiental</ServiceTitle>
              <ServiceDescription>
                Avaliação de impacto ambiental, gestão de recursos naturais e desenvolvimento de estratégias sustentáveis para o seu negócio.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Consultoria Ambiental')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaFlask />
              </IconWrapper>
              <ServiceTitle>Científica</ServiceTitle>
              <ServiceDescription>
                Pesquisa aplicada, análise de dados e desenvolvimento de soluções baseadas em evidências científicas para desafios complexos.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Consultoria Científica')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaUsers />
              </IconWrapper>
              <ServiceTitle>Socioeconómica</ServiceTitle>
              <ServiceDescription>
                Estudos de impacto social, análise de mercado e desenvolvimento de estratégias para maximizar o impacto socioeconómico.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Consultoria Socioeconómica')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
          </ServicesGrid>
          
          <CategoryTitle>Serviços de Apoio</CategoryTitle>
          <ServicesGrid>
            <ServiceCard>
              <IconWrapper>
                <FaClipboardList />
              </IconWrapper>
              <ServiceTitle>Administração e Gestão</ServiceTitle>
              <ServiceDescription>
                Apoio administrativo, gestão de projetos e otimização de processos para aumentar a eficiência operacional.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Administração e Gestão')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaUserTie />
              </IconWrapper>
              <ServiceTitle>Recrutamento e Seleção</ServiceTitle>
              <ServiceDescription>
                Identificação e seleção de talentos qualificados, alinhados com os valores e necessidades da sua organização.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Recrutamento e Seleção')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
          </ServicesGrid>
          
          <CategoryTitle>Formação e Treinamento</CategoryTitle>
          <ServicesGrid>
            <ServiceCard>
              <IconWrapper>
                <FaGraduationCap />
              </IconWrapper>
              <ServiceTitle>Cursos Técnicos e Empresariais</ServiceTitle>
              <ServiceDescription>
                Programas de formação personalizados para desenvolver competências técnicas e de gestão na sua equipa.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Cursos Técnicos e Empresariais')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaGraduationCap />
              </IconWrapper>
              <ServiceTitle>Workshops e Capacitações</ServiceTitle>
              <ServiceDescription>
                Workshops práticos e sessões de capacitação focados em temas específicos para o desenvolvimento profissional.
              </ServiceDescription>
              <QuoteButton onClick={() => handleQuoteClick('Workshops e Capacitações')}>
                <FaCalculator />
                Solicitar Orçamento
              </QuoteButton>
            </ServiceCard>
          </ServicesGrid>
        </ServiceCategories>
        <CTAWrapper>
          <CTAText>Quer conhecer nossos trabalhos realizados?</CTAText>
          <CTAButton to="/trabalhos-realizados">Ver Trabalhos Realizados</CTAButton>
        </CTAWrapper>
      </ServicesContent>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName={selectedService}
      />
    </ServicesContainer>
  );
};

export default ServicesSection;