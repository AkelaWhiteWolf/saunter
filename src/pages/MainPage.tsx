import React from 'react';
import { Container } from '@chakra-ui/react';
import { Header, PathList } from 'src/components';

export const MainPage: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <PathList />
    </Container>
  );
};
