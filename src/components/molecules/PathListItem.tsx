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
  isSelected?: boolean;
};

export const PathListItem: React.FC<Props> = ({
  title,
  shortDescription,
  distance,
  isFavorite,
  isSelected,
  ...stackProps
}) => {
  const distanceLabel = useMemo(
    () => getDistanceLabelFromMeters(distance),
    [distance],
  );

  const boxShadow = isSelected ? 'inset 0 0 3px grey' : undefined;

  return (
    <HStack
      p="5px"
      gap="20px"
      w="100%"
      bg="blue.50"
      boxShadow={boxShadow}
      border="1px solid lightgrey"
      borderRadius="8px"
      cursor="pointer"
      _hover={{ bg: 'blue.100', transition: '0.3s' }}
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
