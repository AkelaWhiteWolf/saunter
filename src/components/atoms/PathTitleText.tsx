import React from 'react';
import { Text } from '@chakra-ui/react';
import { PathSliceType } from 'src/types';

interface Props {
  children: PathSliceType['title'];
}

export const PathTitleText: React.FC<Props> = ({ children }) => {
  return (
    <Text fontSize="xl" color="grey" as="b">
      {children}
    </Text>
  );
};
