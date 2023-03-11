import { createSlice } from "@reduxjs/toolkit";
import { users } from '../constants';

const initialState = users;

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action) => {
             state.push(action.payload);
        },
        updateUser: (state, action) => {
            const user = state.find((user) => user.id === action.payload);
            if (user) {
                return {
                    ...state,
                    user: action.payload,
                }
            }
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },
    }
})

export const { createUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
