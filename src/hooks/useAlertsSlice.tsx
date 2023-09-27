import { useAppSelector, useAppDispatch } from 'src/hooks';

import { alertsSlice } from 'src/redux';
import { AddAlertDataType, AlertDataType } from 'src/types';

const { addAlerterInSlice, deleteAlertFromSlice } = alertsSlice.actions;

const AUTOCLOSE_DELAY = 2000;

export function useAlertsSlice() {
  const dispatch = useAppDispatch();

  const alerts = useAppSelector(state => state.alertsSliceReducer.alerts);
  const availableId = useAppSelector(
    state => state.alertsSliceReducer.availableId,
  );

  function addAlert(alert: AddAlertDataType) {
    dispatch(addAlerterInSlice(alert));

    setTimeout(() => deleteAlert(availableId), AUTOCLOSE_DELAY);
  }

  function deleteAlert(id: AlertDataType['id']) {
    dispatch(deleteAlertFromSlice({ id }));
  }

  return {
    alerts,
    addAlert,
    deleteAlert,
  };
}
