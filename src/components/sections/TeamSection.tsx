import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const TeamContainer = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const TeamContent = styled.div`
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const MemberCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  height: 280px;
  background-color: #e0e0e0;
  background-size: cover;
  background-position: center;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #1a73e8;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #126cc7ff;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a73e8;
  }
`;

const TeamSection: React.FC = () => {
  return (
    <TeamContainer id="team">
      <TeamContent>
        <SectionTitle>Nossa Equipa</SectionTitle>
        
        <TeamGrid>
          <MemberCard>
            <MemberImage style={{ backgroundImage: `url('/src/assets/images/team/logo_Fenias_Cossa.png')` }} />
            <MemberInfo>
              <MemberName>Eng. Fenias Cossa</MemberName>
              <MemberRole>Engenheiro de SoftWare e Analista de Dados</MemberRole>
              <MemberBio>
                Especialista em Desenvolviemento de soluções tecnologicos e Analise de Dados.
              </MemberBio>
              <SocialLinks>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
              </SocialLinks>
            </MemberInfo>
          </MemberCard>
          
          <MemberCard>
            <MemberImage style={{ backgroundImage: `url('/src/assets/images/team/equipe_do_campo.jpg')` }} />
            <MemberInfo>
              <MemberName>Consultoria em Campo</MemberName>
              <MemberRole>Equipa de Isildo</MemberRole>
              <MemberBio>
                Nossa equipa durante trabalho de campo em projetos de conservação ambiental.
              </MemberBio>
              <SocialLinks>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  Saber mais
                </SocialLink>
              </SocialLinks>
            </MemberInfo>
          </MemberCard>
          
          <MemberCard>
            <MemberImage style={{ backgroundImage: `url('/src/assets/images/team/logo_Isisldo.jpg')` }} />
            <MemberInfo>
              <MemberName>Equipa de Consultoria</MemberName>
              <MemberRole>Consultores Ambientais</MemberRole>
              <MemberBio>
                Equipa de consultores durante trabalho de campo com coletes de segurança.
              </MemberBio>
              <SocialLinks>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  Saber mais
                </SocialLink>
              </SocialLinks>
            </MemberInfo>
          </MemberCard>
        </TeamGrid>
      </TeamContent>
    </TeamContainer>
  );
};

export default TeamSection;