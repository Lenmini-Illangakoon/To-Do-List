import React from 'react';
import './ToDoStyle.css';

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

export default ToDo; // Export the ToDo component for use in other files

// Explanation of props:
// todo: An object representing a single to-do item with properties like text and completed status
// index: The index of the current to-do item in the list
// handleToggleComplete: Function to toggle the completion status of the to-do item
// handleDeleteTodo: Function to delete the to-do item