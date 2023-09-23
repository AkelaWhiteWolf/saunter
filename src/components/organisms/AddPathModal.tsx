import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
  VStack,
  FormControl,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddPathButton, CustomInput } from 'src/components';
import {
  useFormValidators,
  useModalsOpenSlice,
  usePathesSlice,
} from 'src/hooks';

interface FormValues {
  title: string;
  shortDescription?: string;
  fullDescription?: string;
}

export const AddPathModal: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const { setMaxLength, fieldRequiredMessage } = useFormValidators();
  const { addPath } = usePathesSlice();
  const { addPathModal } = useModalsOpenSlice();
  const { isOpen, close } = addPathModal;

  const titleRegister = {
    ...register('title', { required: fieldRequiredMessage }),
  };
  const shortDescriptionRegister = {
    ...register('shortDescription', { maxLength: setMaxLength(160) }),
  };
  const fullDescriptionRegister = {
    ...register('fullDescription'),
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    addPath(data);
    close();
  };

  return (
    <Modal size="xl" isOpen={isOpen} onClose={close}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Add new path</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <HStack flex={1}>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <VStack>
                <CustomInput
                  title="Title"
                  register={titleRegister}
                  errorText={errors.title?.message as string}
                />
                <CustomInput
                  title="Short description"
                  type="textarea"
                  register={shortDescriptionRegister}
                  errorText={errors.shortDescription?.message as string}
                />
                <CustomInput
                  title="Full description"
                  type="textarea"
                  register={fullDescriptionRegister}
                  errorText={errors.fullDescription?.message as string}
                />
                <AddPathButton onClick={handleSubmit(onSubmit)} />
              </VStack>
            </FormControl>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
