import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ContactCard from './ContatoCard';

const List = styled.div`
  width: 100%;
`;

const ContatoList: React.FC = () => {
  const contatos = useSelector((state: any) => state.contatos);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_CONTATO', payload: id });
  };

  return (
    <List>
      {contatos.map((contato: any) => (
        <ContactCard
          key={contato.id}
          id={contato.id}
          nome={contato.nome}
          email={contato.email}
          telefone={contato.telefone}
          onRemove={handleRemove}
        />
      ))}
    </List>
  );
};

export default ContatoList;
