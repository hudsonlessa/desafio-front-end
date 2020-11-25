import React from 'react';
import { Container } from './styles';

const ContactForm: React.FC = () => (
  <Container>
    <h1>Mande uma mensagem</h1>
    <label htmlFor="nome">
      Seu nome:
      <input required />
    </label>
    <label htmlFor="nome">
      Email
      <input required />
    </label>
    <label htmlFor="nome">
      Mensagem
      <textarea required />
    </label>
    <button type="submit">Enviar</button>
  </Container>
);

export default ContactForm;
