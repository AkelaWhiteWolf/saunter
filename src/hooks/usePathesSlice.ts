import { useAppSelector, useAppDispatch } from 'src/hooks';

import {
  addPathToSlice,
  removePathFromSlice,
  switchIsPathFavoriteInSlice,
} from 'src/redux';

import {
  AddPathToSliceType,
  RemovePathFromSliceType,
  SwitchIsPathFavoriteInSliceType,
} from 'src/types';

export function useConstructorsBlocks() {
  const dispatch = useAppDispatch();

  const pathesData = useAppSelector(state => state.pathesSliceData.pathes);

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
