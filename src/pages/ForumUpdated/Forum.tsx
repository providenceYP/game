/* eslint-disable */
import React, { useState } from 'react';
import Layout from 'components/Layout';
import { initialTodos } from './initialTodos';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { Todo, ToggleComplete, AddTodo } from './types';

const Forum: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <Layout className="bg-gray-50">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </Layout>
  );
};

export default Forum;
