import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: {},
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setSelectedValues: (state, action) => {
      state.selectedValues = action.payload;
    },
  },
});

export const { setSelectedValues } = librarySlice.actions;
export default librarySlice.reducer;
