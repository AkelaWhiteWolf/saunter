import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertDataType, AddAlertDataType } from 'src/types';

interface InitialState {
  availableId: number;
  alerts: AlertDataType[];
}

const initialState: InitialState = {
  availableId: 1,
  alerts: [],
};

export const alertsSlice = createSlice({
  name: 'alertsSlice',
  initialState,
  reducers: {
    addAlerterInSlice(state, action: PayloadAction<AddAlertDataType>) {
      state.alerts.push({ id: state.availableId++, ...action.payload });
    },

    deleteAlertFromSlice(
      state,
      action: PayloadAction<{ id: AlertDataType['id'] }>,
    ) {
      const deleteIndex = state.alerts.findIndex(
        alert => alert.id === action.payload.id,
      );

      if (deleteIndex !== -1) state.alerts.splice(deleteIndex, 1);

      if (state.alerts.length === 0) state.availableId = 1;
    },
  },
});
