import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './tableSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
    reducer: {
        tables: tableReducer,
        users: usersReducer,
    },
})