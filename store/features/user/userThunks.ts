import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '@/api';
import type { UserState } from './userType';


export const fetchUser = createAsyncThunk<UserState, void>('user/get', async() => {
    const response = await userApi.get();
    return response.data;
});