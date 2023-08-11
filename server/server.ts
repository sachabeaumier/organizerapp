import express from 'express'
import path from 'path'
import todos from './routes/todos'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/todos', todos)

server.get('/api/*', (request, response) => {
  response.sendStatus(404)
})

export default server
