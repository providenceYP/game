/* eslint-disable */
import React from 'react';

import { Comment } from './types';

import './CommentListItem.css';

interface CommentListItemProps {
  comment: Comment;
}

export const CommentListItem: React.FC<CommentListItemProps> = ({
  comment,
}) => {
  return (
    <li className="border-2 border-gray-500 p-6 m-2 rounded-md">
      <div className="flex justify-between">
        <div>{comment.text}</div>
        <div className="text-sm">
          <span className="font-semibold mb-4">{comment.username}</span> <br />
          <span className="font-thin">{comment.date}</span>
        </div>
      </div>
    </li>
  );
};
