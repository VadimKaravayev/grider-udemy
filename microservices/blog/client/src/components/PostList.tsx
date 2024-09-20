import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';
import type { Post } from '../app-type';

interface Posts {
  [key: string]: Post;
}

export function PostList() {
  const [posts, setPosts] = useState({} as Posts);

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:4002/posts');

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(({ id, title, comments }) => {
    return (
      <div className="card" key={id}>
        <div className="card-body">
          <h3>{title}</h3>
          <CommentList comments={comments} />
          <CommentCreate postId={id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}
