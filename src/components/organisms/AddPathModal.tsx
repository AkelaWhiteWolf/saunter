import React from 'react';
import { Modal, HStack, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useModalsOpenSlice } from 'src/hooks';

export const AddPathModal: React.FC = () => {
  const { addPathModal } = useModalsOpenSlice();

  const { isOpen, close } = addPathModal;

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <HStack justifyContent="space-between">
        <Text>Add new path</Text>
        <CloseIcon onClick={close} />
      </HStack>
    </Modal>
  );
};
