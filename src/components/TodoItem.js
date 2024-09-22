import React, { useState } from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.li`
  background-color: ${({ theme }) => theme.inputBg};
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; /* Column by default for better responsiveness */
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonBg};
    color: #fff;
  }

  @media (min-width: 769px) {
    flex-direction: row; /* Row on larger screens */
    align-items: center;
  }
`;

// const TaskText = styled.span`
//   max-width: 100%;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   padding-right: 10px;

//   @media (max-width: 768px) {
//     white-space: normal; /* Allow text to wrap on mobile */
//     margin-bottom: 10px;
//   }
// `;
const TaskText = styled.span`
  max-width: 60%; /* Restrict the width of the task text */
  word-wrap: break-word; /* Allow long words to break and wrap onto the next line */
  white-space: normal; /* Allow the text to wrap onto multiple lines */
  padding-right: 10px; /* Space between text and buttons */

  @media (max-width: 768px) {
    white-space: normal; /* Allow text to wrap on mobile */
    margin-bottom: 10px;
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;

  @media (min-width: 769px) {
    width: auto; /* Revert to auto for desktop view */
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 5px; /* Add margin for spacing between buttons on mobile */
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const TodoItem = ({ todo, index, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo);

  const handleUpdate = () => {
    if (newTask.trim()) {
      updateTodo(index, newTask);
      setIsEditing(false);
    }
  };

  return (
    <TodoItemContainer>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <TaskText>{todo}</TaskText>
      )}
      <ButtonContainer>
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
        <Button onClick={() => deleteTodo(index)}>Delete</Button>
      </ButtonContainer>
    </TodoItemContainer>
  );
};

export default TodoItem;
