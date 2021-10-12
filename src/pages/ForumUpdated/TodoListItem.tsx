/* eslint-disable */
import React from 'react';
import { Todo } from './types';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  // toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  // toggleComplete,
}) => {
  return (
    <li className="border-2 border-gray-500 p-6 m-2 rounded-md">
      <div className="flex justify-between">
        <div>{todo.text}</div>
        <div className="text-sm">
          username <br />
          date
        </div>
      </div>
    </li>
  );
};
