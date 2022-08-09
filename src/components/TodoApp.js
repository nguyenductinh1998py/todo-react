import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import getVisibleTodos from './getVisibleTodos'
import { useSelector, useDispatch } from "react-redux";

let nextTodoId = 0;
const TodoApp = () => {
    const todos = useSelector((state) => state.todos)
    const visibilityFilter = useSelector((state) => state.visibilityFilter)
    const dispatch = useDispatch()

    const handleClickAddTodo = (text) => {
        dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
        })
    }

    return (
        <div className="container w-25 mt-4 h-100 d-flex flex-column justify-content-end ">
            <h1 className="todo-title text-center">Todos</h1>
            <TodoList
                todos={
                    getVisibleTodos(
                        todos,
                        visibilityFilter
                    )
                }
                onTodoClick={id =>
                    dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
            <AddTodo
                onAddClick={handleClickAddTodo}
            />
            <Footer
                visibilityFilter={visibilityFilter}
                onFilterClick={filter =>
                    dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                    })
                }
            />
        </div>
    );
}

export default TodoApp