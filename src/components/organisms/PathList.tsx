import React, { ChangeEvent, useState } from 'react';
import { Box, Input, VStack } from '@chakra-ui/react';
import { usePathesSlice } from 'src/hooks';
import { NoDataText, PathListItem } from 'src/components';
import { PathSliceType } from 'src/types';

interface Props {
  selectPath: (id: PathSliceType['id']) => void;
  selectedPathId: PathSliceType['id'] | null;
}

export const PathList: React.FC<Props> = ({ selectPath, selectedPathId }) => {
  const { getSortedPathes } = usePathesSlice();

  const [search, setSearch] = useState('');

  const pathesBySearch = getSortedPathes().filter(
    ({ title, shortDescription }) =>
      title.toLowerCase().includes(search.toLowerCase()) ||
      shortDescription?.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <Box w="100%" h="100%">
      <Input onInput={handleSetSearch} placeholder="Search..." />

      <VStack py="16px" gap="16px" alignItems="flex-start">
        {pathesBySearch.length ? (
          pathesBySearch.map(path => {
            const isSelected = path.id === selectedPathId;

            return (
              <PathListItem
                key={path.id}
                title={path.title}
                shortDescription={path.shortDescription}
                distance={path.distance}
                isFavorite={path.isFavorite}
                isSelected={isSelected}
                onClick={() => selectPath(path.id)}
              />
            );
          })
        ) : (
          <NoDataText />
        )}
      </VStack>
    </Box>
  );
};
