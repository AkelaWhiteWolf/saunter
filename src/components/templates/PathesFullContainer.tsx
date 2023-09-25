import React, { useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
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
    <Container maxW="container.xl">
      <Header />
      <HStack>
        <PathList selectPath={handleSelectPath} />
        {selectedPathId && <PathFullInfoBlock id={selectedPathId} />}
      </HStack>
    </Container>
  );
};
