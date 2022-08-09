import { useState } from "react";

const AddTodo = ({ onAddClick }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
        console.log(event.target.value)
    }

    const handleClick = () => {
        onAddClick(inputValue)   
        setInputValue('');
        console.log('Con ga');
    }

    return (
        <div className="d-flex justify-content-center">
            <input
                className="w-50 c-input"
                value={inputValue}
                onChange={handleChange}
            />
            <button
                className="add-button"
                onClick={handleClick}
            >
                <i className="fa fa-plus p-plus"></i>
            </button>
        </div>
    );
};

export default AddTodo