import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddComment } from './types';

interface AddCommentFormProps {
  addComment: AddComment;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({
  addComment,
}) => {
  const [newComment, setNewComment] = useState<string>('');
  const [desc, setDesc] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
    setDesc(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { desc };
      const response = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
    addComment(newComment);
    setNewComment('');
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
