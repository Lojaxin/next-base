import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/index.d';
import type { UserState } from './userType';
import { fetchUser } from './userThunks';

const initialState:RootState<UserState> = {
    data: null,
    status: 'idle',
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        });
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
