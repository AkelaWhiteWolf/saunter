import React from 'react';
import { Button } from '@chakra-ui/react';
import { useModalsOpenSlice } from 'src/hooks';

export const OpenAddPathModalButton: React.FC = () => {
  const { addPathModal } = useModalsOpenSlice();

  return (
    <Button colorScheme="blue" onClick={addPathModal.open}>
      Add path
    </Button>
  );
};
