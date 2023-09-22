import React from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from 'src/components';

export const MainPage: React.FC = () => {
  return (
    <Container maxW="container.sm">
      <Header />
    </Container>
  );
};
