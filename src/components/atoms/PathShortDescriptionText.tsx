import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { PathSliceType } from 'src/types';

type Props = TextProps & {
  children: PathSliceType['shortDescription'];
};

export const PathShortDescriptionText: React.FC<Props> = ({
  children,
  ...textProps
}) => {
  return (
    <Text fontSize="md" {...textProps}>
      {children}
    </Text>
  );
};
