import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type Props = TextProps & {
  children: string;
};

export const PathDistanceText: React.FC<Props> = ({
  children,
  ...textProps
}) => {
  return (
    <Text fontSize="2xl" color="grey" as="b" {...textProps}>
      {children}
    </Text>
  );
};
