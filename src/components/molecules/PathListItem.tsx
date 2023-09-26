import React, { useMemo } from 'react';
import { HStack, VStack, StackProps } from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';
import {
  PathDistanceText,
  PathShortDescriptionText,
  PathTitleText,
} from 'src/components';
import { PathSliceType } from 'src/types';
import { getDistanceLabelFromMeters } from 'src/utils';

type Props = StackProps & {
  title: PathSliceType['title'];
  shortDescription: PathSliceType['shortDescription'];
  distance: PathSliceType['distance'];
};

export const PathListItem: React.FC<Props> = ({
  title,
  shortDescription,
  distance,
  ...stackProps
}) => {
  const distanceLabel = useMemo(
    () => getDistanceLabelFromMeters(distance),
    [distance],
  );

  return (
    <HStack
      p="5px"
      gap="20px"
      w="100%"
      maxW="600px"
      boxShadow="0px 1px 5px 0.25px lightgrey"
      borderRadius="8px"
      cursor="pointer"
      {...stackProps}
    >
      <AtSignIcon flex={1} />
      <VStack gap="8px" flex={4} alignItems="flex-start">
        <PathTitleText>{title}</PathTitleText>
        <PathShortDescriptionText>{shortDescription}</PathShortDescriptionText>
      </VStack>

      <PathDistanceText flex={1}>{distanceLabel}</PathDistanceText>
    </HStack>
  );
};
