import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm/InputForm.jsx';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import TaskIndicator from './components/TaskIndicator/TaskIndicator.jsx';
import './App.css';

// The main App component
function App() {

  const [todos, setTodos] = useState (() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  })

  const [input, setInput] = useState('');

  //????
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);

  const handleAddToDo = () => {
      if (input.trim ()){
        setTodos ([...todos, {text: input, completed: false}]);
        setInput('');
      }
  }

  const handleToggleComplete = (index) => {
      const newTodos = todos.map ((todo,i) => 
        i === index ? {...todo , completed: !todo.completed } : todo
      );
      setTodos(newTodos);
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <InputForm input={input} setInput={setInput} handleAddToDo={handleAddToDo}/>
      <ToDoList
        todos = {todos}
        handleToggleComplete = {handleToggleComplete}
        handleDeleteTodo = {handleDeleteTodo}
      />
      <TaskIndicator todos = {todos} /> {/* Pass the todos array as a prop */}
    </div>
  );
}

export default App;
