/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import Layout from 'components/Layout';
import { initialComments } from './initialComments';
import { CommentList } from './CommentList';
import { AddCommentForm } from './AddCommentForm';
import { Comment, AddComment } from './types';

const Forum: React.FC = () => {
  const [comments, setComments] = useState<Array<Comment>>(initialComments);

  const getComments = async () => {
    try {
      const response = await fetch('/api/comments');
      const jsonData = await response.json();
      setComments(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const addComment: AddComment = useCallback(() => {
    (newComment: string) => {
      newComment.trim() !== '' &&
        setComments([
          ...comments,
          {
            text: newComment,
            username: 'Joe',
            date: new Date().toLocaleString(),
          },
        ]);
    };
  }, [comments]);

  return (
    <Layout className="bg-gray-50">
      <div>
        <CommentList comments={comments} />
        <AddCommentForm addComment={addComment} />
      </div>
    </Layout>
  );
};

export default Forum;
