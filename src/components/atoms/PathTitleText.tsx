import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { PathSliceType } from 'src/types';

type Props = TextProps & {
  children: PathSliceType['title'];
};

export const PathTitleText: React.FC<Props> = ({ children, ...textProps }) => {
  return (
    <Text fontSize="xl" color="grey" as="b" {...textProps}>
      {children}
    </Text>
  );
};
