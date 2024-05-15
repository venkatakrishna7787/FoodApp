import createCounterSlice from './counterSlice';
import createProductSlice from './productsSlice';
import createTodoSlice from './todoslices';

const createSlices = (api) => {
  const counter = createCounterSlice();
  const todo = createTodoSlice();
  const products = createProductSlice(api);
  return {
    counter,
    todo,
    products
  };
};
export default createSlices;
