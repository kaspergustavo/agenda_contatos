import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContatoForm from './components/ContatoForm';
import ContatoList from './components/ContatoList';
import EditContatoPage from './components/EditContatoPage';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';
import theme from './styles/theme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.large};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto; /* Centraliza horizontalmente, mas com margem superior */
`;


const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <h1>Gerenciador de Contatos</h1>
        <Routes>
          <Route path="/" element={<><ContatoForm /><ContatoList /></>} />
          <Route path="/edit/:id" element={<EditContatoPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
