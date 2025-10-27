import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const SectionContainer = styled.section`
  padding: 4.5rem 2rem;
  background-color: #f9f9f9;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2.5rem;
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

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const WorkCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
  }
`;

const WorkImage = styled.div<{ $bg?: string }>`
  height: 160px;
  background: ${({ $bg }) => $bg || 'linear-gradient(135deg, #1a73e8, #34a853)'};
  background-size: cover;
  background-position: center;
`;

const WorkBody = styled.div`
  padding: 1rem 1.2rem;
`;

const WorkTitle = styled.h4`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const WorkMeta = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const ActionsRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ViewAllButton = styled(RouterLink)`
  padding: 0.7rem 1.3rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #1a73e8, #34a853);
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(26, 115, 232, 0.3);
  }
`;

const FeaturedWorksSection: React.FC = () => {
  return (
    <SectionContainer id="featured-works">
      <SectionContent>
        <SectionTitle>Destaques de Trabalhos</SectionTitle>
        <WorksGrid>
          <WorkCard>
            <WorkImage $bg={`url('/assets/images/clients/aics.png')`} />
            <WorkBody>
              <WorkTitle>Estudo de Impacto Socioeconómico</WorkTitle>
              <WorkMeta>Setor: Desenvolvimento | Cliente: AICS</WorkMeta>
            </WorkBody>
          </WorkCard>
          <WorkCard>
            <WorkImage $bg={`url('/assets/images/clients/unido.png')`} />
            <WorkBody>
              <WorkTitle>Programa de Capacitação Técnica</WorkTitle>
              <WorkMeta>Setor: Indústria | Cliente: UNIDO</WorkMeta>
            </WorkBody>
          </WorkCard>
          <WorkCard>
            <WorkImage $bg={`url('/assets/images/clients/oikos.png')`} />
            <WorkBody>
              <WorkTitle>Gestão Ambiental Integrada</WorkTitle>
              <WorkMeta>Setor: Ambiente | Cliente: OIKOS</WorkMeta>
            </WorkBody>
          </WorkCard>
        </WorksGrid>
        <ActionsRow>
          <ViewAllButton to="/trabalhos-realizados">Ver todos</ViewAllButton>
        </ActionsRow>
      </SectionContent>
    </SectionContainer>
  );
};

export default FeaturedWorksSection;