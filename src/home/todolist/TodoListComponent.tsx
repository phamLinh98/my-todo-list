import { useFacade } from "./state/todoFacade";

export const TodoListComponent = () => {
    const { data } = useFacade();
    console.log('data', data);
    return <>
        {data && data.map(item => {
            return <li key={item.id}>{item.title}</li>
        })}
    </>
}