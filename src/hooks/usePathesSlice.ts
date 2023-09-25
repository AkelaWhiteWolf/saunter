import { useAppSelector, useAppDispatch } from 'src/hooks';

import { pathesSlice } from 'src/redux';

import {
  AddPathToSliceType,
  PathSliceType,
  RemovePathFromSliceType,
  SwitchIsPathFavoriteInSliceType,
} from 'src/types';

const { addPathToSlice, removePathFromSlice, switchIsPathFavoriteInSlice } =
  pathesSlice.actions;

export function usePathesSlice() {
  const dispatch = useAppDispatch();

  const pathesData = useAppSelector(state => state.pathesSliceReducer.pathes);

  function getPathById(id: PathSliceType['id']) {
    return pathesData.find(path => path.id === id);
  }

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
    getPathById,
    addPath,
    removePath,
    switchIsPathFavorite,
  };
}
