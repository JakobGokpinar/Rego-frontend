import { createSlice } from '@reduxjs/toolkit'
import socket from '../config/socket';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        login(state, action) {
            if(!action.payload) return;
            state.user = action.payload;
            state.isLoggedIn = true;
            socket.emit('addUser', action.payload._id)
        },
        logout(state) {
            state.user = {};
            state.isLoggedIn = false;
            socket.emit('logout')
        },
        setUser(state, action) {
            if(!state.user) return;
            state.user = action.payload;
        },
        setUserFavorites(state, action) {
            const user = state.user;
            user.favorites = action.payload;
        }
    }
})


export const userActions = userSlice.actions;

export default userSlice;