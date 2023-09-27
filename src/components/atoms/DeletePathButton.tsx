import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { useFirestoreDB, usePathesSlice } from 'src/hooks';
import { PathSliceType } from 'src/types';

type Props = ButtonProps & {
  pathId: PathSliceType['id'];
  callback?: () => void;
};

export const DeletePathButton: React.FC<Props> = ({
  pathId,
  callback,
  ...buttonProps
}) => {
  const { deletePathFromDB } = useFirestoreDB();
  const { deletePath } = usePathesSlice();

  function handleDeletePath() {
    deletePathFromDB(pathId);
    deletePath(pathId);
    if (callback) callback();
  }

  return (
    <Button bg="tomato" onClick={handleDeletePath} {...buttonProps}>
      Delete Path
    </Button>
  );
};
