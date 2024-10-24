import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); // Aumenta a opacidade
  display: flex;
  justify-content: center;
  align-items: center; // Centraliza verticalmente
`;

const ModalContent = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius};
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); // Sombra mais pronunciada
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Input = styled.input`
  padding: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.small};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
`;

const Button = styled.button`
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius};
  margin-top: ${theme.spacing.small};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const EditContatoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contatos = useSelector((state: any) => state.contatos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contatoToEdit = contatos.find((contato: any) => contato.id === Number(id));

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    if (contatoToEdit) {
      setNome(contatoToEdit.nome);
      setEmail(contatoToEdit.email);
      setTelefone(contatoToEdit.telefone);
    }
  }, [contatoToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContato = { id: contatoToEdit.id, nome, email, telefone };
    dispatch({ type: 'EDIT_CONTATO', payload: updatedContato });
    navigate('/');
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => navigate('/')}>×</CloseButton>
        <h2>Editar Contato</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <Button type="submit">Salvar Alterações</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditContatoPage;
