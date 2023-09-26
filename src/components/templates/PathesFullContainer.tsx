import React, { useState } from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
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
    <Container maxW="container.xl" h="90%">
      <Header />
      <SimpleGrid columns={2} h="750px">
        <PathList selectPath={handleSelectPath} />
        {selectedPathId && <PathFullInfoBlock id={selectedPathId} />}
      </SimpleGrid>
    </Container>
  );
};
