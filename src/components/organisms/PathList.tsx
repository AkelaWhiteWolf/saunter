import React, { ChangeEvent, useState } from 'react';
import { Box, Input, VStack } from '@chakra-ui/react';
import { usePathesSlice } from 'src/hooks';
import { NoDataText, PathListItem } from 'src/components';
import { PathSliceType } from 'src/types';

interface Props {
  selectPath: (id: PathSliceType['id']) => void;
}

export const PathList: React.FC<Props> = ({ selectPath }) => {
  const { pathesData } = usePathesSlice();

  const [search, setSearch] = useState('');

  const renderedPathes = pathesData.filter(
    ({ title, shortDescription }) =>
      title.toLowerCase().includes(search.toLowerCase()) ||
      shortDescription?.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <Box w="100%" h="100%">
      <Input onInput={handleSetSearch} />

      <VStack
        py="16px"
        gap="16px"
        alignItems="flex-start"
        h="100%"
        maxH="750px"
        overflowY="auto"
      >
        {renderedPathes.length ? (
          renderedPathes.map(path => (
            <PathListItem
              key={path.id}
              title={path.title}
              shortDescription={path.shortDescription}
              distance={path.distance}
              onClick={() => selectPath(path.id)}
            />
          ))
        ) : (
          <NoDataText />
        )}
      </VStack>
    </Box>
  );
};
