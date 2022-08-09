import Todo from './Todo'

const TodoList = ({
        todos,
        onTodoClick
    }) => {
    return (
        <div
            className="d-flex flex-column justify-content-end todo overflow-auto"
        >
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </div>
    )
};

export default TodoList