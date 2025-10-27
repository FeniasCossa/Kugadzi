import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaClipboardList, FaPaperPlane } from 'react-icons/fa';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #eaeaea;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ModalSubtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 0;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  color: #333;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;
  color: #333;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1a73e8, #34a853);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(26, 115, 232, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ServiceTag = styled.div`
  background: linear-gradient(135deg, #1a73e8, #34a853);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`;

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: serviceName || '',
    urgency: 'normal',
    budget: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui você pode integrar com seu backend ou serviço de email
    console.log('Dados do orçamento:', formData);
    
    alert('Solicitação de orçamento enviada com sucesso! Entraremos em contato em breve.');
    
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: serviceName || '',
      urgency: 'normal',
      budget: '',
      description: ''
    });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
          <ModalTitle>Solicitar Orçamento</ModalTitle>
          <ModalSubtitle>
            Preencha o formulário abaixo e nossa equipe entrará em contato para elaborar uma proposta personalizada.
          </ModalSubtitle>
          {serviceName && (
            <ServiceTag>Serviço: {serviceName}</ServiceTag>
          )}
        </ModalHeader>
        
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                <FaUser /> Nome Completo *
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <FaEnvelope /> Email *
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu.email@exemplo.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <FaPhone /> Telefone *
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+258 XX XXX XXXX"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <FaBuilding /> Empresa/Organização
              </Label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nome da sua empresa (opcional)"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <FaClipboardList /> Serviço de Interesse
              </Label>
              <Select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione um serviço</option>
                <option value="Consultoria Ambiental">Consultoria Ambiental</option>
                <option value="Consultoria Científica">Consultoria Científica</option>
                <option value="Consultoria Socioeconómica">Consultoria Socioeconómica</option>
                <option value="Administração e Gestão">Administração e Gestão</option>
                <option value="Recrutamento e Seleção">Recrutamento e Seleção</option>
                <option value="Cursos Técnicos e Empresariais">Cursos Técnicos e Empresariais</option>
                <option value="Workshops e Capacitações">Workshops e Capacitações</option>
                <option value="Outros">Outros</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Urgência do Projeto</Label>
              <Select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
              >
                <option value="baixa">Baixa (mais de 3 meses)</option>
                <option value="normal">Normal (1-3 meses)</option>
                <option value="alta">Alta (menos de 1 mês)</option>
                <option value="urgente">Urgente (menos de 2 semanas)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Orçamento Estimado (opcional)</Label>
              <Select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="">Selecione uma faixa</option>
                <option value="ate-50k">Até 50.000 MT</option>
                <option value="50k-100k">50.000 - 100.000 MT</option>
                <option value="100k-250k">100.000 - 250.000 MT</option>
                <option value="250k-500k">250.000 - 500.000 MT</option>
                <option value="acima-500k">Acima de 500.000 MT</option>
                <option value="a-definir">A definir</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Descrição do Projeto *</Label>
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descreva detalhadamente o seu projeto, objetivos, prazos e qualquer informação relevante que nos ajude a elaborar uma proposta mais precisa..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              <FaPaperPlane />
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </SubmitButton>
          </Form>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default QuoteModal;