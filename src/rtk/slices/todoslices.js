import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};
const createTodoSlice = () => {
  return createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodoItem: {
        reducer(state, {payload}) {
          state.todos.push(payload);
        },
        prepare(title, desc) {
          return {
            payload: {
              id: nanoid(),
              title,
              desc,
            },
          };
        },
      },
    },
  });
};
export default createTodoSlice;
