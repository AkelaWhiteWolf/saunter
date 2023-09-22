import { useAppSelector, useAppDispatch } from 'src/hooks';

import { pathesSlice } from 'src/redux';

import {
  AddPathToSliceType,
  RemovePathFromSliceType,
  SwitchIsPathFavoriteInSliceType,
} from 'src/types';

const { addPathToSlice, removePathFromSlice, switchIsPathFavoriteInSlice } =
  pathesSlice.actions;

export function useConstructorsBlocks() {
  const dispatch = useAppDispatch();

  const pathesData = useAppSelector(state => state.pathesSliceReducer.pathes);

  function addPath(data: AddPathToSliceType) {
    dispatch(addPathToSlice(data));
  }

  function removePath(data: RemovePathFromSliceType) {
    dispatch(removePathFromSlice(data));
  }

  function switchIsPathFavorite(data: SwitchIsPathFavoriteInSliceType) {
    dispatch(switchIsPathFavoriteInSlice(data));
  }

  return {
    pathesData,
    addPath,
    removePath,
    switchIsPathFavorite,
  };
}
