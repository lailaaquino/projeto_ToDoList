// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      onAddTask(taskInput);
      setTaskInput('');
    }
  };

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="TaskForm">
      <label htmlFor="taskInput" className="TaskForm__label">
        Digite uma nova tarefa:
      </label>
      <input
        id="taskInput"
        type="text"
        value={taskInput}
        onChange={handleChange}
        placeholder="Digite uma nova tarefa"
        className="TaskForm__input"
      />
      <button type="submit" className="TaskForm__button">Adicionar</button>
    </form>
  );
};

export default TaskForm;
