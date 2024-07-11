// src/components/taskForm.js

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={handleChange}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
