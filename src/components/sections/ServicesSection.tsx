import React from 'react';
import styled from 'styled-components';
import { FaLeaf, FaFlask, FaUsers, FaClipboardList, FaUserTie, FaGraduationCap } from 'react-icons/fa';

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

const ServicesSection: React.FC = () => {
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
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaFlask />
              </IconWrapper>
              <ServiceTitle>Científica</ServiceTitle>
              <ServiceDescription>
                Pesquisa aplicada, análise de dados e desenvolvimento de soluções baseadas em evidências científicas para desafios complexos.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaUsers />
              </IconWrapper>
              <ServiceTitle>Socioeconómica</ServiceTitle>
              <ServiceDescription>
                Estudos de impacto social, análise de mercado e desenvolvimento de estratégias para maximizar o impacto socioeconómico.
              </ServiceDescription>
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
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaUserTie />
              </IconWrapper>
              <ServiceTitle>Recrutamento e Seleção</ServiceTitle>
              <ServiceDescription>
                Identificação e seleção de talentos qualificados, alinhados com os valores e necessidades da sua organização.
              </ServiceDescription>
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
            </ServiceCard>
            
            <ServiceCard>
              <IconWrapper>
                <FaGraduationCap />
              </IconWrapper>
              <ServiceTitle>Workshops e Capacitações</ServiceTitle>
              <ServiceDescription>
                Workshops práticos e sessões de capacitação focados em temas específicos para o desenvolvimento profissional.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServiceCategories>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ServicesSection;