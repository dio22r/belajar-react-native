import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LoginState {
  username: string;
}

const initialState: LoginState = {
  username: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, username: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = username.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLogin} = loginSlice.actions;

export default loginSlice.reducer;
