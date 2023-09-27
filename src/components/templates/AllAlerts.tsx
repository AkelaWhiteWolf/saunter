import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useAlertsSlice } from 'src/hooks';

export const AllAlerts: React.FC = () => {
  const { alerts } = useAlertsSlice();

  return alerts.length ? (
    <VStack spacing={3} alignItems="center">
      {alerts.map(alert => (
        <Alert status={alert.status} key={alert.id} maxW="500px">
          <AlertIcon />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}
    </VStack>
  ) : null;
};
