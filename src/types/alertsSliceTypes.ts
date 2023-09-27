import { AlertStatus } from '@chakra-ui/react';

export interface AlertDataType {
  id: number;
  status: AlertStatus;
  title: string;
  description?: string;
}

export type AddAlertDataType = Omit<AlertDataType, 'id'>;
