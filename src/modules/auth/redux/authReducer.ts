import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userDetail, userLogin } from '../../../services/authService';
import { push } from 'redux-first-history';
import { ROUTES } from '../../../configs/routes';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
import toastMessage from '../../../components/toast/Toast';

export interface initialAuthState {
  loading: boolean;
  userDetail: any;
}

export const initialState: initialAuthState = {
  loading: false,
  userDetail: {},
};

export const getToken = createAsyncThunk<void, any, {}>(
  'auth/getTokenUser',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await userLogin(data);
      if (res) {
        dispatch(push(ROUTES.home));
      }
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getUserDetail = createAsyncThunk('auth/getUserDetail', async () => {
  try {
    const res = await userDetail();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getToken.fulfilled, (state, action: any) => {
      state.loading = false;
      Cookies.set(ACCESS_TOKEN_KEY, action.payload.data.token);
    });
    builder.addCase(getToken.rejected, (state, action: any) => {
      state.loading = false;
      toastMessage('error', action.payload.message);
    });
    builder.addCase(getUserDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetail = action.payload.data;
    });
    builder.addCase(getUserDetail.rejected, (state, action: any) => {
      state.loading = false;
      toastMessage('error', action.payload.message);
    });
  },
});

export default authReducer.reducer;
