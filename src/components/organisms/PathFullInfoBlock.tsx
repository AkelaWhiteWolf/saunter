import React, { useMemo } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import {
  CustomGoogleMap,
  NoDataText,
  PathDistanceText,
  PathFullDescriptionText,
  PathTitleText,
} from 'src/components';
import { usePathesSlice } from 'src/hooks';
import { PathSliceType } from 'src/types';
import { getDistanceLabelFromMeters } from 'src/utils';

interface Props {
  id: PathSliceType['id'];
}

export const PathFullInfoBlock: React.FC<Props> = ({ id }) => {
  const { getPathById } = usePathesSlice();

  const path = useMemo(() => getPathById(id), [id]);

  if (!path) return <NoDataText />;

  const distanceLabel = getDistanceLabelFromMeters(path.distance);

  return (
    <VStack gap="8px">
      <VStack justifyContent="space-between">
        <PathTitleText>{path.title}</PathTitleText>
        <PathDistanceText>{distanceLabel}</PathDistanceText>
      </VStack>

      <PathFullDescriptionText>{path.fullDescription}</PathFullDescriptionText>
      <Box w="400px" h="400px">
        <CustomGoogleMap markers={path.markers} />
      </Box>
    </VStack>
  );
};
