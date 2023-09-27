import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { OpenAddPathModalButton } from 'src/components';

export const Header: React.FC = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack gap="20px">
        <PlusSquareIcon boxSize="45px" />
        <Text fontSize="3xl">Saunter</Text>
      </HStack>

      <OpenAddPathModalButton />
    </HStack>
  );
};
