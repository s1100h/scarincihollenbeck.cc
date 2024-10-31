import { createSlice } from '@reduxjs/toolkit';
import { sizeWindow } from 'styles/sizeWindow.style';

const initialState = {
  headerSize: { width: 0, height: 0 },
  viewportSize: {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isScreenSm:
      typeof window !== 'undefined'
        ? window.innerWidth >= sizeWindow.sm
        : false,
    isScreenMd:
      typeof window !== 'undefined'
        ? window.innerWidth >= sizeWindow.md
        : false,
    isScreenLg:
      typeof window !== 'undefined'
        ? window.innerWidth >= sizeWindow.lg
        : false,
    isScreenXl:
      typeof window !== 'undefined'
        ? window.innerWidth >= sizeWindow.xl
        : false,
    isScreenXxl:
      typeof window !== 'undefined'
        ? window.innerWidth >= sizeWindow.xxl
        : false,
  },
};

const sizesSlice = createSlice({
  name: 'sizes',
  initialState,
  reducers: {
    setHeaderSize: (state, action) => {
      state.headerSize = action.payload;
    },
    setWindowSize: (state, action) => {
      state.viewportSize = {
        width: action.payload.width,
        height: action.payload.height,
        isScreenSm: action.payload.isScreenSm,
        isScreenMd: action.payload.isScreenMd,
        isScreenLg: action.payload.isScreenLg,
        isScreenXl: action.payload.isScreenXl,
        isScreenXxl: action.payload.isScreenXxl,
      };
    },
  },
});

export const { setHeaderSize, setWindowSize } = sizesSlice.actions;
export default sizesSlice.reducer;
