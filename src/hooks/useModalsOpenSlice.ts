import { useAppSelector, useAppDispatch } from 'src/hooks';

import { modalsOpenSlice } from 'src/redux';

const { closeAddPathModalInSlice, openAddPathModalInSlice } =
  modalsOpenSlice.actions;

export function useModalsOpenSlice() {
  const dispatch = useAppDispatch();

  const isModalsOpenData = useAppSelector(state => state.modalsOpenReducer);

  const addPathModal = {
    isOpen: isModalsOpenData.isAddPathModalOpen,
    open() {
      dispatch(openAddPathModalInSlice());
    },
    close() {
      dispatch(closeAddPathModalInSlice());
    },
  };

  return {
    addPathModal,
  };
}
