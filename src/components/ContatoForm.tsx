import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import theme from '../styles/theme';

const flagImages: { [key: string]: string } = {
  BR: '/flags/brazil.png',
  US: '/flags/usa.png',
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: ${theme.spacing.large};
  padding: ${theme.spacing.medium}; // Adicionado padding
  background: ${theme.colors.white}; // Fundo branco
  border-radius: ${theme.borderRadius}; // Bordas arredondadas
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Sombra suave
`;

const Input = styled.input`
  padding: ${theme.spacing.medium}; // Ajustado para um padding mais uniforme
  margin-bottom: ${theme.spacing.small};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
  width: 100%;
  transition: border 0.3s; // Transição suave na borda

  &:focus {
    border-color: ${theme.colors.primary}; // Borda azul ao focar
    outline: none; // Remove o contorno padrão
  }
`;

const Select = styled.select`
  padding: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.small};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
  width: auto;
  margin-right: ${theme.spacing.small};
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;

const Option = styled.option`
  padding: ${theme.spacing.small};
`;

const InputMasked = styled(InputMask)`
  padding: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.small};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
  width: calc(100% - 120px); /* Adjust for select width */
  display: inline-block; /* Align next to select */
`;

const Button = styled.button`
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s, transform 0.3s; // Efeito de transformação

  &:hover {
    background-color: ${theme.colors.primaryHover};
    transform: scale(1.02); // Leve aumento ao passar o mouse
  }
`;

const CountryFlag = styled.img`
  width: 20px;
  height: 15px;
  margin-right: ${theme.spacing.small}; /* Space between flag and text */
`;

const ContatoForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pais, setPais] = useState('BR');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contato = { id: Date.now(), nome, email, telefone };
    dispatch({ type: 'ADD_CONTATO', payload: contato });
    setNome('');
    setEmail('');
    setTelefone('');
    setPais('BR');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        pattern="[A-Za-z\s]+"
        title="O nome deve conter apenas letras e espaços"
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Insira um email válido"
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Select value={pais} onChange={(e) => setPais(e.target.value)}>
          <Option value="BR">
            <CountryFlag src={flagImages['BR']} alt="Brasil" /> Brasil
          </Option>
          <Option value="US">
            <CountryFlag src={flagImages['US']} alt="Estados Unidos" /> Estados Unidos
          </Option>
        </Select>
        <InputMasked
          mask={pais === 'BR' ? '(99) 99999-9999' : '(999) 999-9999'}
          placeholder="Telefone"
          value={telefone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)}
        />
      </div>
      <Button type="submit">Adicionar Contato</Button>
    </FormContainer>
  );
};

export default ContatoForm;
