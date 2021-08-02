import { createSlice } from '@reduxjs/toolkit';

const overlaySlice = createSlice({
  name: 'overlay',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openOverlay(state, action) {
      state.isOpen = true;
    },
    closeOverlay(state, action) {
      state.isOpen = false;
    },
  }
});

export const overlayActions = overlaySlice.actions;

export default overlaySlice;