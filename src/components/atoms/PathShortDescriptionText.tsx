import React from 'react';
import { Text } from '@chakra-ui/react';
import { PathSliceType } from 'src/types';

interface Props {
  children: PathSliceType['shortDescription'];
}

export const PathShortDescriptionText: React.FC<Props> = ({ children }) => {
  return <Text fontSize="md">{children}</Text>;
};
