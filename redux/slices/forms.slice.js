import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCheckedDisclaimer: '',
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    handleCheckDisclaimer: (state, action) => {
      state.isCheckedDisclaimer = action.payload;
    },
  },
});

export const { handleCheckDisclaimer } = formSlice.actions;
export default formSlice.reducer;
