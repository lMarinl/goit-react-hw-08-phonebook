import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { STATUSES } from '../../utils/Statuses';
import {
  apiLoginUser,
  apiRefreshUser,
  apiRegisterUser,
} from './authOperations';

const initialState = {
  token: null,
  userData: null,
  isLoggedIn: false,
  error: null,
  status: STATUSES.idle,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiRefreshUser.pending
        ),
        state => {
          state.status = STATUSES.pending;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiRefreshUser.rejected
        ),
        (state, action) => {
          state.status = STATUSES.error;
          state.error = action.payload;
          console.log('  state.error: ', state.error);
        }
      ),
});

export const authReducer = authSlice.reducer;
