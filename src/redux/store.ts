import { configureStore } from '@reduxjs/toolkit';

import { pathesSlice, modalsOpenSlice, alertsSlice } from './slices';

const store = configureStore({
  reducer: {
    pathesSliceReducer: pathesSlice.reducer,
    modalsOpenReducer: modalsOpenSlice.reducer,
    alertsSliceReducer: alertsSlice.reducer,
  },
});

export { pathesSlice, modalsOpenSlice, alertsSlice };

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
