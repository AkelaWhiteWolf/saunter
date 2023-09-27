import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { PathSliceType } from 'src/types';

type Props = TextProps & {
  children: PathSliceType['fullDescription'];
};

export const PathFullDescriptionText: React.FC<Props> = ({
  children,
  ...textProps
}) => {
  return (
    <Text fontSize="sm" {...textProps}>
      {children}
    </Text>
  );
};
