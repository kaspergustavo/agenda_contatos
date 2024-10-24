import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.small};
  padding: ${theme.spacing.medium};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius};
  margin-left: ${theme.spacing.small};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.dangerHover};
  }
`;

const EditButton = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  padding: ${theme.spacing.small};
  margin-left: ${theme.spacing.small};
  border-radius: ${theme.borderRadius};
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const ContatoList = () => {
  const contatos = useSelector((state: any) => state.contatos);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_CONTATO', payload: id });
  };

  return (
    <List>
      {contatos.map((contato: any) => (
        <ListItem key={contato.id}>
          <div>
            <strong>{contato.nome}</strong> - {contato.email} - {contato.telefone}
          </div>
          <div>
            <EditButton to={`/edit/${contato.id}`}>Editar</EditButton>
            <Button onClick={() => handleRemove(contato.id)}>Remover</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ContatoList;
