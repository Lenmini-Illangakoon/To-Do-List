import React from 'react';
import './TaskIndicatorStyle.css';

// The TaskIndicator component displays the total number of tasks
const TaskIndicator = ({todos}) => {
    <div className='task-counter'>
    {/* Display the total count of tasks */}
        <h3>
            You have {todos.length} {todos.length === 1 ? "task" : "tasks" }
        </h3>
    </div>
}

export default TaskIndicator;

// todos.length ->   total number of items in the todos array
// { todos.length }: Displays the number of tasks