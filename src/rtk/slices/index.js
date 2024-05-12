import createCounterSlice from './counterSlice';
import createTodoSlice from './todoslices';

const createSlices = () => {
  const counter = createCounterSlice();
  const todo = createTodoSlice();
  return {
    counter,
    todo,
  };
};
export default createSlices;
