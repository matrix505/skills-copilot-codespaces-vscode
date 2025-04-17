// Create Web Server 
// Import express
const express = require('express');
// Import fs
const fs = require('fs');
// Create express app
const app = express();
// Use json parser middleware
app.use(express.json());

// Read data from comments.json file
let comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// GET /comments - Return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments - Create a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
  res.status(201).json(newComment);
});

// DELETE /comments/:id - Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
  res.status(204).send();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
