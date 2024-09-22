import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInput = styled.input`
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 10px;
  margin-right: 10px;
  width: 300px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError('Task cannot be empty');
      return;
    }
    addTodo(task);
    setTask('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
      />
      <Button type="submit">Add</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </form>
  );
};

export default TodoForm;
