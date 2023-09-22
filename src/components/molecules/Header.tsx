import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { OpenAddPathModelButton } from 'src/components';

export const Header: React.FC = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack gap="20px">
        <PlusSquareIcon />
        <Text>Saunter</Text>
      </HStack>

      <OpenAddPathModelButton />
    </HStack>
  );
};
