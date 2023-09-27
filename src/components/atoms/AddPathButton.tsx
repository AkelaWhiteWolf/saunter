import React from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
}

export const AddPathButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      Add path
    </Button>
  );
};
