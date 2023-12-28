import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: [],
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    getInfo: (state, action) => {
      state.info  = action.payload;
    },
  },
})

export const { getInfo, searchInfo } = infoSlice.actions

export default infoSlice.reducer