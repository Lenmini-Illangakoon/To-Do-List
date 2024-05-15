import React from 'react';
import 'TaskIndicator.css';

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