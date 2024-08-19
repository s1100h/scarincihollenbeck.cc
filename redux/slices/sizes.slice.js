import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerSize: { width: 0, height: 0 },
};

const sizesSlice = createSlice({
  name: 'sizes',
  initialState,
  reducers: {
    setHeaderSize: (state, action) => {
      state.headerSize = action.payload;
    },
  },
});

export const { setHeaderSize } = sizesSlice.actions;
export default sizesSlice.reducer;
