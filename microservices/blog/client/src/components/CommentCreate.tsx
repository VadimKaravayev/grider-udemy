import axios from 'axios';
import React, { useState } from 'react';

interface CommentCreateProps {
  postId: string;
}

export function CommentCreate({ postId }: CommentCreateProps) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment-input">New Comment</label>
          <input
            type="text"
            id="comment-input"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
