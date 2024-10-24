import React from 'react';
import ContatoForm from './components/ContatoForm';
import ContatoList from './components/ContatoList';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <h1>Gerenciador de Contatos</h1>
      <ContatoForm />
      <ContatoList />
    </AppContainer>
  );
};

export default App;
