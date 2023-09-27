import React, { useEffect } from 'react';
import { PathesFullContainer } from 'src/components';
import { useFirestoreDB, usePathesSlice } from 'src/hooks';

export const MainPage: React.FC = () => {
  const { getPathesFromDB } = useFirestoreDB();
  const { addReadyPathes } = usePathesSlice();

  useEffect(() => {
    const fetchData = async () => {
      const dbPathes = await getPathesFromDB();
      console.log('dbPathes', dbPathes);
      if (dbPathes?.length) {
        addReadyPathes(dbPathes);
      }
    };

    fetchData();
  }, []);

  return <PathesFullContainer />;
};
