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
    setLogin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLogin} = loginSlice.actions;

export default loginSlice.reducer;
