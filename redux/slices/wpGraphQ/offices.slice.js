import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {},
  // extraReducers?: (builder) => void,
});

// export const { increment, decrement, incrementByAmount } = officesSlice.actions
export default officesSlice.reducer;
