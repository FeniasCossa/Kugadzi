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
  background-image: url('/src/assets/images/team-placeholder.jpg');
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
  color: #555;
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
            <MemberImage />
            <MemberInfo>
              <MemberName>Eng. Fenias Sebastião</MemberName>
              <MemberRole>Consultor Ambiental & Científico</MemberRole>
              <MemberBio>
                Especialista em consultoria ambiental e científica com vasta experiência em projetos de desenvolvimento sustentável.
              </MemberBio>
              <SocialLinks>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
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