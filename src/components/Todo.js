const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li
        className='d-flex text-start justify-content-between' 
        onClick={onClick}
    >
        <span 
            className={
                completed ? 
                "todo__content todoItem text-decoration-line-through" :
                "todo__content todoItem"
            }
        > 
            {text}
        </span>
        {completed ? <i className="fa fa-check c-check"></i> : false}
        
    </li>
);

export default Todo