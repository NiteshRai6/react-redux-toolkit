import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/slices/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});