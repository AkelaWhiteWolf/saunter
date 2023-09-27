import React, { useState, useEffect } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import {
  CustomGoogleMap,
  DeletePathButton,
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

  const [path, setPath] = useState(() => getPathById(id));

  useEffect(() => setPath(getPathById(id)), [id]);

  if (!path) return <NoDataText />;

  const distanceLabel = getDistanceLabelFromMeters(path.distance);

  const deletePathCallback = () => setPath(undefined);

  return (
    <VStack gap="8px" maxW="100%" overflowY="auto">
      <HStack gap="20px" justifyContent="flex-end">
        <DeletePathButton pathId={id} callback={deletePathCallback} />
      </HStack>
      <HStack w="100%" justifyContent="space-between">
        <PathTitleText>{path.title}</PathTitleText>
        <PathDistanceText>{distanceLabel}</PathDistanceText>
      </HStack>

      <PathFullDescriptionText>{path.fullDescription}</PathFullDescriptionText>
      <Box w="400px" h="400px">
        <CustomGoogleMap markers={path.markers} />
      </Box>
    </VStack>
  );
};
