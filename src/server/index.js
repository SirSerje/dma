// server.js
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.argv[2] || 3002

// Middleware
app.use(cors())
app.use(express.json())

// Default HTML Response
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mock Proxy</title>
    </head>
    <body>
      <h1>Mock Proxy is running</h1>
      <p>Server is up and running on port ${PORT}</p>
      <a href="/api/test-endpoint">Check API Endpoint</a>
    </body>
    </html>
  `)
})

// API Endpoint
app.get('/api/test-endpoint', (req, res) => {
  const sampleData = ['Item 1', 'Item 2', 'Item 3']
  res.json(sampleData)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
