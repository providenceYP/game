import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from './types';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form>
      <input
        className="border-2 border-gray-500 rounded-md w-80 h-20"
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="     Введите комментарий"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="border-2 border-gray-500 bg-blue-200 rounded-md w-60 h-14 ml-2 p-4"
      >
        Добавить комментарий
      </button>
    </form>
  );
};
