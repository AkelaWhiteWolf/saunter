import { configureStore } from '@reduxjs/toolkit';

import { pathesSlice } from './slices';

const store = configureStore({
  reducer: {
    pathesSliceData: pathesSlice.reducer,
  },
});

export const {
  addPathToSlice,
  removePathFromSlice,
  switchIsPathFavoriteInSlice,
} = pathesSlice.actions;

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
