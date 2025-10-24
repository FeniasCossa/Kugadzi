import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  grid-column: 1 / -1;
  
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

const ContactInfo = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(231, 214, 214, 0.05);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #1a73e8;
  margin-right: 1rem;
`;

const InfoText = styled.div`
  color: #555;
`;

const InfoTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 3px solid #48a7d0ff;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  color: black;
  
  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 3px solid #48a7d0ff;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background-color: white;
  color: black;
  
  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;

const SubmitButton = styled.button`
  background-color: #1a73e8;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0d62c9;
  }
`;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle>Contactos</SectionTitle>
        
        <ContactInfo>
          <InfoItem>
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoText>
              <InfoTitle>Endereço</InfoTitle>
              <p>Maputo, Moçambique</p>
            </InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FaPhone />
            </InfoIcon>
            <InfoText>
              <InfoTitle>Telefone</InfoTitle>
              <p>+258 84 150 5598</p>
            </InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoText>
              <InfoTitle>Email</InfoTitle>
              <p>info@kugadzi.co.mz</p>
            </InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FaWhatsapp />
            </InfoIcon>
            <InfoText>
              <InfoTitle>WhatsApp</InfoTitle>
              <p>+258 84 000 0000</p>
            </InfoText>
          </InfoItem>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Assunto</Label>
            <Input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Mensagem</Label>
            <TextArea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
        </ContactForm>
        
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;