import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  FormControl,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddPathButton, CustomGoogleMap, CustomInput } from 'src/components';
import {
  useFormValidators,
  useModalsOpenSlice,
  usePathesSlice,
} from 'src/hooks';
import { PathMarkerType, PathSliceType } from 'src/types';

interface FormValues {
  title: PathSliceType['title'];
  shortDescription?: PathSliceType['shortDescription'];
  fullDescription?: PathSliceType['fullDescription'];
}

export const AddPathModal: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();
  const { setMaxLength, fieldRequiredMessage } = useFormValidators();
  const { addPath } = usePathesSlice();
  const { addPathModal } = useModalsOpenSlice();
  const { isOpen, close } = addPathModal;

  const [markers, setMarkers] = useState<PathMarkerType[]>([]);

  const titleRegister = {
    ...register('title', { required: fieldRequiredMessage }),
  };
  const shortDescriptionRegister = {
    ...register('shortDescription', { maxLength: setMaxLength(160) }),
  };
  const fullDescriptionRegister = {
    ...register('fullDescription'),
  };

  const setMarker = (marker: PathMarkerType) =>
    setMarkers([...markers, marker]);

  const removeMarker = (indexToRemove: number) =>
    setMarkers(markers.filter((_, index) => index !== indexToRemove));

  const closeAndReset = () => {
    close();
    reset();
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (markers.length > 0) {
      addPath({ ...data, markers });
      closeAndReset();
    } else {
      // FIXME: add alerter to UI.
      console.error('No markers!');
    }
  };

  return (
    <Modal size="3xl" isOpen={isOpen} onClose={closeAndReset}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Add new path</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <SimpleGrid columns={2}>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <VStack alignItems="flex-start" p="10px">
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

            <Box>
              <CustomGoogleMap
                setMarker={setMarker}
                removeMarker={removeMarker}
                markers={markers}
              />
            </Box>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
