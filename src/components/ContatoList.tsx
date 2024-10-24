import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const EditButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContatoList = () => {
  const contatos = useSelector((state: any) => state.contatos);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_CONTATO', payload: id });
  };

  const handleEdit = (contato: any) => {
    // lógica para editar contato
  };

  return (
    <List>
      {contatos.map((contato: any) => (
        <ListItem key={contato.id}>
          <div>
            <strong>{contato.nome}</strong> - {contato.email} - {contato.telefone}
          </div>
          <div>
            <EditButton onClick={() => handleEdit(contato)}>Editar</EditButton>
            <Button onClick={() => handleRemove(contato.id)}>Remover</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ContatoList;
