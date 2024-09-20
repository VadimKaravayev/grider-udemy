import React from 'react';
import type { Comment } from '../app-type';

interface CommentListrops {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListrops) {
  const renderedComments = comments.map(({ id, content, status }) => {
    let newContent;

    switch (status) {
      case 'approved':
        newContent = content;
        break;
      case 'pending':
        newContent = 'This comment is awaiting moderation';
        break;
      case 'rejected':
        newContent = 'This comment has been rejected';
        break;
    }

    return <li key={id}>{newContent}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
