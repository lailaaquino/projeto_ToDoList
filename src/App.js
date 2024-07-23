import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import './App.scss'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleRemoveTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((task, index) => index !== indexToRemove);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <header className="App__header">
        <nav className="App__nav">
          <h1 className="App__title">TodoList</h1>
        </nav>
      </header>
      <main className="App__main">
        <TaskForm onAddTask={handleAddTask} />
        <section className="App__tasks">
          <h2 className="App__tasks-title">Lista de Tarefas</h2>
          <ul className="App__task-list">
            {tasks.map((task, index) => (
              <li key={index} className="App__task-item">
                <span className="App__task-text">{task}</span>
                <button 
                  className="App__task-remove" 
                  onClick={() => handleRemoveTask(index)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
