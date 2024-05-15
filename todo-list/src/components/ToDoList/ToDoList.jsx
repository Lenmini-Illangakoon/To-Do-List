import React from 'react';
import ToDo from './ToDo';
import 'ToDoListstyle.css';

// The ToDoList component renders a list of ToDo components
const ToDoList = ({todos, handleToggleComplete, handleDeleteTodo}) => {
    return (
        <ul>
        {/* Map over the todos array and render a ToDo component for each item */}
        {todos.map((todo,index) => (
            <ToDo
                key={index}
                index={index}
                todo={todo}
                handleToggleComplete={handleToggleComplete}
                handleDeleteTodo={handleDeleteTodo}
            />
        ))}
        </ul>
    )
}

export default ToDoList;