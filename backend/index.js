// index.js
import express from 'express';

const app = express();
const PORT = 5001;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
