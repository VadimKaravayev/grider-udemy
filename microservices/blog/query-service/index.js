const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

function handleEvent(type, data) {
  switch (type) {
    case 'PostCreated':
      const { title } = data;
      posts[data.id] = { id, title, comments: [] };
      break;
    case 'CommentCreated': {
      const { id, content, postId, status } = data;
      const post = posts[postId];
      post.comments.push({ id, content, status });
      break;
    }
    case 'CommentUpdated': {
      const { id, content, postId, status } = data;
      const post = posts[postId];
      const comment = post.comments.find((comment) => comment.id === id);
      comment.status = status;
      comment.content = content;
      break;
    }
  }
}

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({});
});

app.listen(4002, async () => {
  console.log('Query Service listening on 4002');

  const { data } = await axios.get('http://localhost:4005/events');

  for (let event of data) {
    handleEvent(event.type, event.data);
  }
});
