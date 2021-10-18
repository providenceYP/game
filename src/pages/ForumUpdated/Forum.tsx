/* eslint-disable */
import React, { useState } from 'react';
import Layout from 'components/Layout';
import { initialComments } from './initialComments';
import { CommentList } from './CommentList';
import { AddCommentForm } from './AddCommentForm';
import { Comment, AddComment } from './types';

const Forum: React.FC = () => {
  const [comments, setComments] = useState<Array<Comment>>(initialComments);

  const addComment: AddComment = (newComment) => {
    newComment.trim() !== '' &&
      setComments([...comments, { text: newComment, username: 'Joe', date: (new Date()).toLocaleString() }]);
  };

  return (
    <Layout className="bg-gray-50">
      <div className="">

        <CommentList comments={comments} />
        <AddCommentForm addComment={addComment} />
      </div>
    </Layout>
  );
};

export default Forum;
