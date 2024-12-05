import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { todoThunk } from "./todoThunk";

interface DataItem {
    id: any;
    title: string;
    views: string;
}

export const useFacade = () => {
    const data = useSelector((state: RootState) => state.TodoReducer.data as DataItem[]); // Đảm bảo kiểu là DataItem[]
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(todoThunk());
    }, [dispatch])
    return {
        data
    };
};
