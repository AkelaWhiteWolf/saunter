import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddPathToSliceType,
  PathSliceType,
  RemovePathFromSliceType,
  SwitchIsPathFavoriteInSliceType,
} from 'src/types';

export const pathesSlice = createSlice({
  name: 'pathesSlice',
  initialState: { availableId: 1, pathes: [] as PathSliceType[] },
  reducers: {
    addPathToSlice(state, action: PayloadAction<AddPathToSliceType>) {
      state.pathes.push({
        id: state.availableId++,
        ...action.payload,
      });
    },

    switchIsPathFavoriteInSlice(
      state,
      action: PayloadAction<SwitchIsPathFavoriteInSliceType>,
    ) {
      const selectedPath = state.pathes.find(
        path => path.id === action.payload.id,
      );

      if (selectedPath) {
        selectedPath.isFavorite = !selectedPath.isFavorite;
      } else {
        console.error('No this path in Redux!');
      }
    },

    removePathFromSlice(state, action: PayloadAction<RemovePathFromSliceType>) {
      const selectedPathIndex = state.pathes.findIndex(
        path => path.id === action.payload.id,
      );

      if (selectedPathIndex !== -1) {
        state.pathes.splice(selectedPathIndex, 1);
      } else {
        console.error('No this path in Redux!');
      }
    },
  },
});
