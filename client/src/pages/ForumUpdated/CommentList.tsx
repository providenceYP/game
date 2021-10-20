/* eslint-disable */
import React from 'react';
import { Comment } from './types';
import { CommentListItem } from './CommentListItem';

interface CommentListProps {
  comments: Array<Comment>;
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
}) => {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentListItem
          key={comment.text}
          comment={comment}
        />
      ))}
    </ul>
  );
};
