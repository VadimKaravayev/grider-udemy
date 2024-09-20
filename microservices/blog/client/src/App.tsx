import React from 'react';
import './App.css';
import { PostCreate } from './components/PostCreate';
import { PostList } from './components/PostList';

export function App() {
  return (
    <div className="container">
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
}
