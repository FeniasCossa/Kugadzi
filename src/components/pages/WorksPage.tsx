import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.section`
  padding: 6rem 2rem 4rem; /* espaço para o header fixo */
  background-color: #fff;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
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

const Intro = styled.p`
  color: #555;
  text-align: center;
  margin: 2rem auto 3rem;
  max-width: 900px;
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const WorkCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const WorkTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const WorkDesc = styled.p`
  color: #666;
  margin-bottom: 1rem;
  min-height: 48px;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button`
  background-color: #1a73e8;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover { background-color: #0d62c9; }
`;

const DownloadLink = styled.a`
  background-color: #34a853;
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  
  &:hover { background-color: #2b8a45; }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: #fff;
  width: 90%;
  max-width: 1100px;
  border-radius: 8px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

const PdfFrame = styled.iframe`
  width: 100%;
  height: 80vh;
  border: none;
`;

// Observação: coloque seus PDFs em `public/assets/pdfs/`.
// Exemplo: public/assets/pdfs/relatorio-impacto.pdf
// Os links abaixo são exemplos; substitua pelos seus arquivos locais.
const works = [
  {
    title: 'Relatório: Avaliação de Impacto Ambiental',
    description: 'Estudo completo de impactos e medidas de mitigação em projeto de conservação.',
    url: '/assets/pdfs/FINAL_Report_Coffe_Cultivation_22.09.2025.pdf',
  },
  {
    title: 'Relatório: Estudo Socioeconómico',
    description: 'Análise socioeconómica da área de intervenção com recomendações estratégicas.',
    url: 'https://arxiv.org/pdf/2003.08933.pdf',
  },
  {
    title: 'Relatório de Desenvolvimento Sustentável (exemplo)',
    description: 'Exemplo usando um PDF público para validação de visualização.',
    url: 'https://arxiv.org/pdf/1706.03762.pdf',
  },
];

const WorksPage: React.FC = () => {
  const [openUrl, setOpenUrl] = useState<string | null>(null);
  const onRead = (url: string) => setOpenUrl(url);
  const onClose = () => setOpenUrl(null);

  return (
    <PageContainer>
      <Content>
        <PageTitle>Trabalhos realizados</PageTitle>
        <Intro>
          Nesta página você pode visualizar os relatórios e estudos diretamente no site
          ou baixar os arquivos em PDF para consulta offline.
        </Intro>

        <WorksGrid>
          {works.map((w) => (
            <WorkCard key={w.title}>
              <WorkTitle>{w.title}</WorkTitle>
              <WorkDesc>{w.description}</WorkDesc>
              <Actions>
                <Button onClick={() => onRead(w.url)}>Ler</Button>
                <DownloadLink href={w.url} download>Baixar</DownloadLink>
              </Actions>
            </WorkCard>
          ))}
        </WorksGrid>
      </Content>

      {openUrl && (
        <ModalBackdrop onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <strong>Visualização de PDF</strong>
              <CloseBtn onClick={onClose}>✕</CloseBtn>
            </ModalHeader>
            <PdfFrame src={openUrl} />
          </ModalContent>
        </ModalBackdrop>
      )}
    </PageContainer>
  );
};

export default WorksPage;