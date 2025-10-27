import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import QuoteModal from './QuoteModal';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

const NavMenu = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;
    background-color: #fff;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const RouteNavLink = styled(RouterLink)`
  color: #333;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a73e8;
  }
`;

const CtaButton = styled.button`
  background-color: #1a73e8;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 1.5rem;
  
  &:hover {
    background-color: #0d62c9;
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0 0 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const openQuoteModal = () => {
    setSelectedService('');
    setIsQuoteOpen(true);
    closeMenu();
  };
  
  return (
    <HeaderContainer>
      <NavContainer>

        <Logo>
          <img src="/assets/images/Kugadzi8.png" alt="Kugadzi Consultoria" />
        </Logo>

        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        
        <NavMenu $isOpen={isMenuOpen}>
          <NavItem>
            <RouteNavLink to="/#home" onClick={closeMenu}>
              Início
            </RouteNavLink>
          </NavItem>
          <NavItem>
            <RouteNavLink to="/#about" onClick={closeMenu}>
              Sobre
            </RouteNavLink>
          </NavItem>
          <NavItem>
            <RouteNavLink to="/#services" onClick={closeMenu}>
              Serviços
            </RouteNavLink>
          </NavItem>
          <NavItem>
            <RouteNavLink to="/#team" onClick={closeMenu}>
              Equipa
            </RouteNavLink>
          </NavItem>
          <NavItem>
            <RouteNavLink to="/#contact" onClick={closeMenu}>
              Contactos
            </RouteNavLink>
          </NavItem>
          <NavItem>
            <RouteNavLink to="/trabalhos-realizados" onClick={closeMenu}>
              Trabalhos realizados
            </RouteNavLink>
          </NavItem>
          
          <CtaButton onClick={openQuoteModal}>
            Solicitar Orçamento
          </CtaButton>
        </NavMenu>
        
        <QuoteModal 
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          serviceName={selectedService}
        />
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;