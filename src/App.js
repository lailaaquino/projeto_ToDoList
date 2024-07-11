// src/App.js

import React, { useState, useEffect } from 'react';
import TaskForm from './components/taskForm';  // Importa o componente TaskForm
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Carregar tarefas salvas no localStorage ao iniciar o componente
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleAddTask = (newTask) => { //add tarefa
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleRemoveTask = (indexToRemove) => { //remove tarefa
    const updatedTasks = tasks.filter((task, index) => index !== indexToRemove);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={handleAddTask} />  {/* exibe TaskForm */}
      <ul>
        {/*percorre as tarefas e transforma em item da lista */}
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
