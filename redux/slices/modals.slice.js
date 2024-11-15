import { createSlice } from '@reduxjs/toolkit';
import empty from 'is-empty';

const initialState = {
  isActiveModal: false,
  customModalClassName: '',
  isActiveSubscriptionModal: false,
  customSubscriptionModalClassName: '',
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    handleModalOpener: (state, action) => {
      state.isActiveModal = action.payload?.active;

      if (!empty(action.payload.className)) {
        state.customModalClassName = action.payload.className;
      } else {
        state.customModalClassName = '';
      }
    },
    handleSubscriptionModalOpener: (state, action) => {
      state.isActiveSubscriptionModal = action.payload?.active;

      if (!empty(action.payload.className)) {
        state.customSubscriptionModalClassName = action.payload.className;
      } else {
        state.customSubscriptionModalClassName = '';
      }
    },
  },
});

export const { handleModalOpener, handleSubscriptionModalOpener } = modalsSlice.actions;
export default modalsSlice.reducer;
