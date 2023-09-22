import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useModalsOpenSlice } from 'src/hooks';

export const AddPathModal: React.FC = () => {
  const { addPathModal } = useModalsOpenSlice();
  const { isOpen, close } = addPathModal;

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Add new path</ModalHeader>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};
