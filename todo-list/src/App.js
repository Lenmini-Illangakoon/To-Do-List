import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm/InputForm' ;
import ToDoList from './components/ToDoList/ToDoList';
import TaskIndicator from './components/TaskIndicator/TaskIndicator';
import './App.css';

// The main App component
function App() {

  // useState hook to manage the todos state
  const [todos, setTodos] = useState (() => {
    // Get the saved todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    // If there are saved todos, parse them to JavaScript objects/arrays, 
    // otherwise initialize as an empty array
    return savedTodos ? JSON.parse(savedTodos) : [];
  })

  // State to manage the current input value
  const [input, setInput] = useState('');

  // useEffect hook to update localStorage whenever the todos state changes
  useEffect(() => {
    // Convert the todos array to a JSON string and save it in localStorage
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]); // Dependency array: this effect runs whenever the todos state changes

  // Function to add a new todo item
  const handleAddToDo = () => {
    // Check if input is not just whitespace
    if (input.trim()) {
      // Update the todos state with the new todo item added to the end of the array
      setTodos([...todos, { text: input, completed: false }]);
      // Clear the input field
      setInput('');
    }
  };


  // Function to toggle the completed status of a todo item by its index
  const handleToggleComplete = (index) => {
    // Map over the todos array to toggle the completed status of the specified todo
    const newTodos = todos.map((todo, i) =>
      // If the current index matches the specified index, toggle the completed status
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    // Update the todos state with the new array
    setTodos(newTodos);
  };


  // Function to delete a todo item by its index
  const handleDeleteTodo = (index) => {
    // Filter out the todo item at the specified index
    const newTodos = todos.filter((_, i) => i !== index);
    // Update the todos state with the new arra
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
