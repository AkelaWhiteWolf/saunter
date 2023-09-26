import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux';
import { MainPage } from 'src/pages';
import { AllModals } from 'src/components';
import { theme } from 'src/styles';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <MainPage />
          <AllModals />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  );
};
