import React, { useState, useRef } from 'react';

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  
  // Reference for the input field to focus after adding a task
  const inputRef = useRef(null);

  // Function to handle adding a new task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskInput, completed: false },
      ]);
      setTaskInput(''); // Clear the input field
      inputRef.current.focus(); // Focus on the input field
    }
  };

  // Function to handle task completion toggle
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to handle task deletion
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          ref={inputRef}
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()} // Add task on Enter key
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
