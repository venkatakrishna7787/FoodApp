import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productByUser: [],
};
const createProductSlice = api => {
  return createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addMatcher(
        api.endpoints.getProducts.matchFulfilled,
        (state, {payload}) => {
          state.products = payload;
        },
      );
      builder.addMatcher(
        api.endpoints.getProductById.matchFulfilled,
        (state, {payload}) => {
          state.productByUser = payload;
        },
      );
    },
  });
};
export default createProductSlice;
