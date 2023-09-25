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

interface Props {
  id: PathSliceType['id'];
}

export const PathFullInfoBlock: React.FC<Props> = ({ id }) => {
  const { getPathById } = usePathesSlice();

  const path = useMemo(() => getPathById(id), [id]);

  return path ? (
    <VStack gap="8px">
      <VStack justifyContent="space-between">
        <PathTitleText>{path.title}</PathTitleText>
        {/* TODO: add real value */}
        <PathDistanceText>600 m</PathDistanceText>
      </VStack>

      <PathFullDescriptionText>{path.fullDescription}</PathFullDescriptionText>
      <Box w="400px" h="400px">
        <CustomGoogleMap markers={path.markers} />
      </Box>
    </VStack>
  ) : (
    <NoDataText />
  );
};
