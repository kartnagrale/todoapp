import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const lightTheme = {
  background: '#E5F4FB', // Sky blue
  color: '#000',
  inputBg: '#FFF',
  buttonBg: '#1C6DD0',
};

const darkTheme = {
  background: '#000',
  color: '#FFF',
  inputBg: '#333',
  buttonBg: '#F57C00', // Orange
};

const themes = { light: lightTheme, dark: darkTheme };

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 60px;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Quote = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const ModeToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.buttonBg};
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const App = () => {
  const [theme, setTheme] = useState('dark');

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const updateTodo = (index, updatedTask) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? updatedTask : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer>
        <ModeToggle onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </ModeToggle>
        <Quote>"Stay focused and never give up!"</Quote>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
