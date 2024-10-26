import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const AlertContainer = styled.div`
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white};
  padding: ${theme.spacing.small};
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.spacing.small};
  text-align: center;
`;

const ErrorAlert: React.FC<{ message: string }> = ({ message }) => {
  return <AlertContainer>{message}</AlertContainer>;
};

export default ErrorAlert;
