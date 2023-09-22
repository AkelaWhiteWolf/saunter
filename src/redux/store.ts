import { configureStore } from '@reduxjs/toolkit';

import { pathesSlice, modalsOpenSlice } from './slices';

const store = configureStore({
  reducer: {
    pathesSliceReducer: pathesSlice.reducer,
    modalsOpenReducer: modalsOpenSlice.reducer,
  },
});

export { pathesSlice, modalsOpenSlice };

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
