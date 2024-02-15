import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { STATUSES } from '../../utils/Statuses';
import {
  apiLoginUser,
  apiLogoutUser,
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
      .addCase(apiLogoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiRefreshUser.pending,
          apiLogoutUser.pending
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
          apiRefreshUser.rejected,
          apiLogoutUser.rejected
        ),
        (state, action) => {
          state.status = STATUSES.error;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
