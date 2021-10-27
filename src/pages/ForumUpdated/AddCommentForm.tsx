/* eslint-disable no-unused-vars */
import React, { useState, ChangeEvent, FormEvent } from 'react';

import { AddComment } from './types';

interface AddCommentFormProps {
  addComment: AddComment;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({
  addComment,
}) => {
  const [newComment, setNewComment] = useState<string>('');

  const [description, setDescription] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setNewComment(inputValue);
    setDescription({
      text: inputValue,
      username: 'Joe',
      date: new Date().toLocaleString(),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const body = { description };

      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      // window.location.href = '/forum';
    } catch (err) {
      console.error(err);
    }

    addComment(newComment);
  };

  return (
    <form>
      <input
        className="border-2 border-gray-500 rounded-md w-80 h-20 p-4"
        type="text"
        value={newComment}
        onChange={handleChange}
        placeholder="Введите комментарий"
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
