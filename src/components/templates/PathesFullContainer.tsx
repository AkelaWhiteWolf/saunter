import React, { useState } from 'react';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { Header, PathFullInfoBlock, PathList } from 'src/components';
import { PathSliceType } from 'src/types';

export const PathesFullContainer = () => {
  const [selectedPathId, setSelectedPath] = useState<
    PathSliceType['id'] | null
  >(null);

  function handleSelectPath(id: PathSliceType['id']) {
    setSelectedPath(id);
  }

  return (
    <Container maxW="container.xl" h="750px">
      <Header />
      <SimpleGrid
        columns={2}
        h="100%"
        bg="lightgrey"
        mt="20px"
        borderRadius="15px"
      >
        <Box
          h="100%"
          p="15px"
          borderRight="1px solid lightgrey"
          overflowY="auto"
        >
          <PathList
            selectPath={handleSelectPath}
            selectedPathId={selectedPathId}
          />
        </Box>
        {selectedPathId && (
          <Box h="100%" p="15px" overflowY="auto">
            <PathFullInfoBlock id={selectedPathId} />
          </Box>
        )}
      </SimpleGrid>
    </Container>
  );
};
