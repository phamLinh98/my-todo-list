import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../src/home/todolist/state/todoReducer';

export const store = configureStore({
    reducer: {
        TodoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;