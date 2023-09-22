import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux';
import { MainPage } from 'src/pages';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  );
};
