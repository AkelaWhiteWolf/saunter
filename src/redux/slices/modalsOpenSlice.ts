import { createSlice } from '@reduxjs/toolkit';

export const modalsOpenSlice = createSlice({
  name: 'modalsOpenSlice',
  initialState: { isAddPathModalOpen: false },
  reducers: {
    openAddPathModalInSlice(state) {
      state.isAddPathModalOpen = true;
    },
    closeAddPathModalInSlice(state) {
      state.isAddPathModalOpen = false;
    },
  },
});
