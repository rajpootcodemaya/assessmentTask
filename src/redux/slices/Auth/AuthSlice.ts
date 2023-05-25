import {createSlice} from '@reduxjs/toolkit';
import {SignUpUser} from './authApi';

interface initialState {
  data: any;
}

const initialAuthState: initialState = {
  data: null,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(SignUpUser.pending, (state, action) => {
      state.data = null;
    });
    builder.addCase(SignUpUser.fulfilled, (state, action) => {
      state.data = null;
    });
    builder.addCase(SignUpUser.rejected, (state, action) => {
      state.data = null;
    });
  },
});

export default authSlice.reducer;
