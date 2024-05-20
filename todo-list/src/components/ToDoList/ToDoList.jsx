import React from 'react';
import ToDo from '../ToDo/ToDo';
import './ToDoListStyle.css'; 

// The ToDoList component renders a list of ToDo components
const ToDoList = ({todos, handleToggleComplete, handleDeleteTodo}) => {
    return (
        <ul>
        {/* Map over the todos array and render a ToDo component for each item */}
        {todos.map((todo,index) => (
            <ToDo
            key={index} // Unique key for each list item, required by React
            index={index} // Pass the index to the ToDo component
            todo={todo} // Pass the todo item to the ToDo component
            handleToggleComplete={handleToggleComplete} // Pass the toggle function to the ToDo component
            handleDeleteTodo={handleDeleteTodo} // Pass the delete function to the ToDo component
            />
        ))}
        </ul>
    )
}

export default ToDoList;

// key={index}: Assigns a unique key to each ToDo component for efficient updates by React.