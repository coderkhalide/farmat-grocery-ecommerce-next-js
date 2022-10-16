
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        },
    },
});

export const { updateUser, removeUser } = authSlice.actions;

export const selectUser = state => state.auth.user

export default authSlice.reducer;