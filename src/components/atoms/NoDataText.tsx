import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export const NoDataText: React.FC<TextProps> = textProps => {
  return (
    <Text fontSize="md" color="grey" as="i" {...textProps}>
      No Data...
    </Text>
  );
};
