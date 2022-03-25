import React, {useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainers() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // 매번 렌더링되지 않도록 useCallback으로 감싸준다
    const onCreate = useCallback((text) => (dispatch(addTodo(text))), [dispatch]);
    const onToggle = useCallback((id) => (dispatch(toggleTodo(id))), [dispatch]);
    
    return (
        <Todos
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        ></Todos>
    );
}

export default TodosContainers;