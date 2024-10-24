import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

interface Props {
  editContato?: { id: number; nome: string; email: string; telefone: string };
}

const ContatoForm: React.FC<Props> = ({ editContato }) => {
  const [nome, setNome] = useState(editContato ? editContato.nome : '');
  const [email, setEmail] = useState(editContato ? editContato.email : '');
  const [telefone, setTelefone] = useState(editContato ? editContato.telefone : '');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contato = { id: editContato ? editContato.id : Date.now(), nome, email, telefone };
    if (editContato) {
      dispatch({ type: 'EDIT_CONTATO', payload: contato });
    } else {
      dispatch({ type: 'ADD_CONTATO', payload: contato });
    }
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
      <Button type="submit">{editContato ? 'Editar Contato' : 'Adicionar Contato'}</Button>
    </FormContainer>
  );
};

export default ContatoForm;
