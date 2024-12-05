import { createBrowserRouter } from "react-router-dom";
import { TodoListComponent } from "../home/todolist/TodoListComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoListComponent />
    },
])