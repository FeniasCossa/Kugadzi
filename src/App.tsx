import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import FeaturedWorksSection from './components/sections/FeaturedWorksSection';
import TeamSection from './components/sections/TeamSection';
import ClientsSection from './components/sections/ClientsSection';
import ContactSection from './components/sections/ContactSection';
import WorksPage from './components/pages/WorksPage';

function useScrollToHash() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90; // compensar header fixo
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);
}

function Landing() {
  useScrollToHash();
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
      <FeaturedWorksSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/trabalhos-realizados" element={<WorksPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
