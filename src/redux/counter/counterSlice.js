import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        state.value += Number(action.payload);
      } else {
        state.value += 1;
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        state.value -= Number(action.payload);
      } else {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
