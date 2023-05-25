import {createSlice} from '@reduxjs/toolkit';
import {SignInUser} from './signInApi';

interface initialState {
  isLoggedIn: boolean;
  loading: boolean;
  Token: any;
}

const initialAuthState: initialState = {
  isLoggedIn: false,
  loading: false,
  Token: null,
};

const SignInSlice = createSlice({
  name: 'Auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(SignInUser.pending, (state, action) => {
      state.loading = true;
      state.isLoggedIn = false;
      state.Token = null;
    });
    builder.addCase(SignInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = action?.payload?.registered ? true : false;
      state.Token = action?.payload?.idToken;
    });
    builder.addCase(SignInUser.rejected, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.Token = null;
    });
  },
});

export default SignInSlice.reducer;
