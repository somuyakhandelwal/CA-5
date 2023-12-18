import { configureStore } from '@reduxjs/toolkit'
import BookReducer from './Slice/Book';

export const Store = configureStore({
    reducer: {
        book : BookReducer,
    }
});