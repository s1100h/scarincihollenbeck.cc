import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  isCheckedDisclaimer: '',
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    handleCheckDisclaimer: (state, action) => {
      if (typeof action.payload === 'boolean') {
        state.isCheckedDisclaimer = action.payload;
      } else {
        state.isCheckedDisclaimer = action.payload;
      }
    },
  },
});

export const { handleCheckDisclaimer } = formSlice.actions;
export default formSlice.reducer;
