import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};
const createCounterSlice = () => {
  return createSlice({
    name: 'counter',
    initialState,
    reducers: {
      incrementThecount: (state, action) => {
        return {...state, count: state.count + 1};
      },
      decrementCount: (state, action) => {
        state.count = state.count - 1;
      },
      resetTheCount: (state, action) => {
        state.count = 0;
      },
      incrementByAmount: (state, action) => {
        state.count = action.payload;
      },
    },
  });
};
export default createCounterSlice;
