
import express from 'express';
import cors from 'cors';
import { mockResponse } from '../mocks/config.js';

const app = express();
const PORT = process.argv[2] || 3002;

app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mock Proxy is running');
});

app.get('/api/getconfig', (req, res) => {
  res.json(mockResponse);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

