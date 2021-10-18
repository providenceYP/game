import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddComment } from './types';

interface AddCommentFormProps {
  addComment: AddComment;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({
  addComment,
}) => {
  const [newComment, setNewComment] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
