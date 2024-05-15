import React from 'react';
import 'ToDoStyles.css';

// The ToDo component represents an individual to-do item
const ToDo = ({todo, index, handleToggleComplete, handleDeleteTodo}) => {
    return (
        <li className={todo.completed ? 'completed' : '' }> 
            {/* Display the text of the to-do item */}
            <span>{todo.text}</span>

            {/* Button to mark the to-do item as completed or undo */}
            <button onClick={() =>  handleToggleComplete(index)} className='done-btn'>
            {todo.completed ? "Undo" : "Done"}
            </button>

            {/* Button to delete the to-do item */}
            <button onClick={() => handleDeleteTodo(index)} className='delete-btn'> 
            Delete 
            </button>
        </li>
    )
}

export default ToDo;