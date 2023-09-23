import React from 'react';
import { Box, Input, Text, Textarea } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  register: UseFormRegisterReturn;
  title?: string;
  type?: 'input' | 'textarea';
  errorText?: string;
}

export const CustomInput: React.FC<Props> = ({
  register,
  title,
  type = 'input',
  errorText,
}) => {
  const InputOrTextarea = () =>
    type === 'input' ? <Input {...register} /> : <Textarea {...register} />;

  return (
    <Box>
      <Text fontSize="2xl">{title}</Text>
      <InputOrTextarea />
      <Text fontSize="xs">{errorText}</Text>
    </Box>
  );
};
