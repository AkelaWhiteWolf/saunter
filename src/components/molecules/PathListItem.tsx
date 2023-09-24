import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';
import {
  PathDistanceText,
  PathShortDescriptionText,
  PathTitleText,
} from 'src/components';
import { PathSliceType } from 'src/types';

interface Props {
  title: PathSliceType['title'];
  shortDescription: PathSliceType['shortDescription'];
}

export const PathListItem: React.FC<Props> = ({ title, shortDescription }) => {
  return (
    <HStack gap="20px">
      <AtSignIcon flex={1} />
      <VStack gap="8px" flex={4}>
        <PathTitleText>{title}</PathTitleText>
        <PathShortDescriptionText>{shortDescription}</PathShortDescriptionText>
      </VStack>
      {/* TODO: add real value */}
      <PathDistanceText flex={1}>600 m</PathDistanceText>
    </HStack>
  );
};
