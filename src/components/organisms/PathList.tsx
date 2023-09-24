import React, { ChangeEvent, useState } from 'react';
import { Box, Input, VStack } from '@chakra-ui/react';
import { usePathesSlice } from 'src/hooks';
import { PathListItem } from '..';

export const PathList: React.FC = () => {
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
    <Box>
      <Input onInput={handleSetSearch} />

      <VStack gap="8px" alignItems="flex-start" maxH="750px" overflowY="auto">
        {renderedPathes.map(path => (
          <PathListItem
            key={path.id}
            title={path.title}
            shortDescription={path.shortDescription}
          />
        ))}
      </VStack>
    </Box>
  );
};
