import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { useFirestoreDB, usePathesSlice } from 'src/hooks';
import { PathSliceType } from 'src/types';

type Props = ButtonProps & {
  pathId: PathSliceType['id'];
  callback?: () => void;
};

export const SwitchIsPathFavoriteButton: React.FC<Props> = ({
  pathId,
  callback,
  ...buttonProps
}) => {
  const { switchIsPathFavoriteInDB } = useFirestoreDB();
  const { switchIsPathFavorite, getPathById } = usePathesSlice();

  const isFavorite = getPathById(pathId)?.isFavorite;

  const label = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  function handleSwitch() {
    switchIsPathFavoriteInDB(pathId);
    switchIsPathFavorite(pathId);
    if (callback) callback();
  }

  return (
    <Button bg="lightblue" onClick={handleSwitch} {...buttonProps}>
      {label}
    </Button>
  );
};
