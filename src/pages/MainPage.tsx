import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { PathesFullContainer } from 'src/components';
import { useFirestoreDB, usePathesSlice } from 'src/hooks';

export const MainPage: React.FC = () => {
  const { getPathesFromDB } = useFirestoreDB();
  const { addReadyPathes } = usePathesSlice();

  useEffect(() => {
    const fetchData = async () => {
      const dbPathes = await getPathesFromDB();
      if (dbPathes?.length) {
        addReadyPathes(dbPathes);
      }
    };

    fetchData();
  }, []);

  return (
    <Box mt="20px">
      <PathesFullContainer />
    </Box>
  );
};
