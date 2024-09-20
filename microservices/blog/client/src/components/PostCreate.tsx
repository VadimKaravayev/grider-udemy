import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export function PostCreate() {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input-id">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="input-id"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
