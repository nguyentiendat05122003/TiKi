import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '~/features/authentication/api/userApi';
import { FormValuesRegister, ParamsLogin, ResponseValue } from '~/types/auth';

interface UserState {
    currentUser: ResponseValue | null;
}

const initialState = {
    currentUser: {
        user: JSON.parse(localStorage.getItem('user') || 'null'),
        jwt: JSON.parse(localStorage.getItem('access_token') || 'null'),
    },
} as UserState;
export const fetchRegisterUser = createAsyncThunk(
    'users/fetchRegisterUser',
    async (data: FormValuesRegister, { rejectWithValue }) => {
        try {
            const response = await userApi.registerUser(data);
            return response;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
export const fetchLoginUser = createAsyncThunk(
    'users/fetchLoginUser',
    async (data: ParamsLogin, { rejectWithValue }) => {
        try {
            const response = await userApi.loginUser(data);
            localStorage.setItem('access_token', JSON.stringify(response.jwt));
            localStorage.setItem('user', JSON.stringify(response.user));
            return response;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            localStorage.removeItem('info-user');
            localStorage.removeItem('avatar');
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
    },
});
const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
export default userReducer;
