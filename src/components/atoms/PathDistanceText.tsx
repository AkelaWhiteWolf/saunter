import React from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  children: string;
}

export const PathDistanceText: React.FC<Props> = ({ children }) => {
  return (
    <Text fontSize="2xl" color="grey" as="b">
      {children}
    </Text>
  );
};
