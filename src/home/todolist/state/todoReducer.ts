import { createSlice } from "@reduxjs/toolkit";

export const TodoReducerSlice = createSlice({
    name: "todolist",
    initialState: { data: [], error: "" },
    reducers: {
        getList: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { getList } = TodoReducerSlice.actions;
export default TodoReducerSlice.reducer;
