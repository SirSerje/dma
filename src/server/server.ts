// (!) 'bun' runs ts without additional config
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { mockResponse } from '../mocks/config.js'

const app = express()
const PORT = process.argv[2] || 3002

app.use((req: Request, res: Response, next: NextFunction) => {
  setTimeout(next, 1000)
})

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Mock Proxy is running')
})

app.get('/api/getconfig', (req: Request, res: Response) => {
  res.json(mockResponse)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
