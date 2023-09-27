import { useAppSelector, useAppDispatch } from 'src/hooks';

import { pathesSlice } from 'src/redux';

import { AddPathToSliceType, PathSliceType } from 'src/types';

const {
  addPathToSlice,
  addReadyPathesToSlice,
  removePathFromSlice,
  switchIsPathFavoriteInSlice,
} = pathesSlice.actions;

export function usePathesSlice() {
  const dispatch = useAppDispatch();

  const pathesData = useAppSelector(state => state.pathesSliceReducer.pathes);
  const availableId = useAppSelector(
    state => state.pathesSliceReducer.availableId,
  );

  function getPathById(id: PathSliceType['id']) {
    return pathesData.find(path => path.id === id);
  }

  function addPath(data: AddPathToSliceType) {
    dispatch(addPathToSlice(data));
  }

  function addReadyPathes(data: PathSliceType[]) {
    dispatch(addReadyPathesToSlice(data));
  }

  function deletePath(id: PathSliceType['id']) {
    dispatch(removePathFromSlice({ id }));
  }

  function switchIsPathFavorite(id: PathSliceType['id']) {
    dispatch(switchIsPathFavoriteInSlice({ id }));
  }

  function getSortedPathes() {
    const favorites = pathesData.filter(path => path.isFavorite);
    const notFavorites = pathesData.filter(path => !path.isFavorite);

    return [...favorites, ...notFavorites];
  }

  return {
    pathesData,
    availableId,
    getPathById,
    addPath,
    addReadyPathes,
    deletePath,
    switchIsPathFavorite,
    getSortedPathes,
  };
}
