import ListTableComponent from "./ListTableComponent";
import { useFacade } from "./state/todoFacade";

export const TodoListComponent = () => {
    const { data } = useFacade();
    console.log('data', data);
    return <ListTableComponent />
}