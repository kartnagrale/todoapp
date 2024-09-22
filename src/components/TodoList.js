import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 400px;
`;

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
