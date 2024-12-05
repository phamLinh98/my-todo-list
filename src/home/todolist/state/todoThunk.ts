import { getList } from "./todoReducer";

export const todoThunk = () => {
    return async (dispatch: (arg0: { payload: any; type: "todolist/getList"; }) => void) => {
        const data = await fetch("http://localhost:4000/todo");
        const response = await data.json();
        dispatch(getList(response));
    }
}