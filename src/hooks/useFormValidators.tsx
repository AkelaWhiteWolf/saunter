import { RegisterOptions } from 'react-hook-form';

type setMaxLengthType = (value: number) => RegisterOptions['maxLength'];
type fieldRequiredMessageType = RegisterOptions['required'];

export const useFormValidators = () => {
  const fieldRequiredMessage: fieldRequiredMessageType =
    'This field is required';

  const setMaxLength: setMaxLengthType = value => ({
    value,
    message: `Text should be less than or equal to ${value}`,
  });
  return { fieldRequiredMessage, setMaxLength };
};
