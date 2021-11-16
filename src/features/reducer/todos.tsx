import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface todosState {
  todos: todo[];
  isLoading: boolean;
}

const initialState: todosState = {
  todos: [],
  isLoading: true,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  return axios.get<todo[]>(baseUrl).then(response => response.data);
});

export const updateTodos = createAsyncThunk(
  'todos/updateTodos',
  async (todoId: number) => todoId,
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(updateTodos.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        let todos = state.todos.find(todo => todo.id === action.payload);
        if (todos) {
          todos.completed = !todos.completed;
        }
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {setChecked} = todosSlice.actions;

export default todosSlice.reducer;
