import React, { useMemo } from 'react';
import { HStack, VStack, StackProps } from '@chakra-ui/react';
import { AtSignIcon, StarIcon } from '@chakra-ui/icons';
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
  isFavorite?: boolean;
};

export const PathListItem: React.FC<Props> = ({
  title,
  shortDescription,
  distance,
  isFavorite,
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
      bg="lightgrey"
      boxShadow="0px 1px 5px 0.25px lightgrey"
      borderRadius="8px"
      cursor="pointer"
      {...stackProps}
    >
      <AtSignIcon flex={1} />
      <VStack gap="8px" flex={4} alignItems="flex-start">
        <HStack gap="4px">
          {isFavorite && <StarIcon color="cyan" />}
          <PathTitleText>{title}</PathTitleText>
        </HStack>
        <PathShortDescriptionText>{shortDescription}</PathShortDescriptionText>
      </VStack>

      <PathDistanceText flex={1}>{distanceLabel}</PathDistanceText>
    </HStack>
  );
};
