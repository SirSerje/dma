import express from 'express';
import cors from 'cors';
import { mockResponse } from '../mocks/config.js';

const app = express();
const PORT = process.argv[2] || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Default HTML Response
app.get('/', (req, res) => {
  res.send('Mock Proxy is running');
});

// API Endpoint - Get Configuration
app.get('/api/getconfig', (req, res) => {
  res.json(mockResponse);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

