import express from 'express'
import { Todo } from '../../client/common/todo'
import {
  getAllTodos,
  addTodo,
  getOneTodo,
  deleteTodo,
  updateTodo,
} from '../db/db'

const router = express.Router()

router.get('/', (request, response) => {
  getAllTodos()
    .then((todos) => {
      response.json(todos)
    })
    .catch((err: Error) => {
      response.status(500).send(err.message)
    })
})

router.post('/addtodo', (request, response) => {
  const newTodo = request.body
  addTodo(newTodo)
    .then((newTodo) => {
      response.json(newTodo)
    })
    .catch((err: Error) => {
      response.status(500).send(err.message)
    })
})

router.get('/:id', (request, response) => {
  getOneTodo(Number(request.params.id))
    .then((todo) => response.json)
    .catch((err) =>
      response.status(500).json({ status: 500, error: err.message })
    )
})

router.patch('/:id', (request, response) => {
  const { task, description, img } = request.body
  const updatedTodo = {
    id: Number(request.params.id),
    task: task,
    description: description,
    img: img,
  } as Todo
  updateTodo(updatedTodo)
    .then((updatedTodo) => {
      response.json(updatedTodo)
    })
    .catch((err: Error) => {
      response.status(500).send(err.message)
    })
})

router.delete('/:id', (request, response) => {
  const id = Number(request.params.id)
  deleteTodo(id)
    .then((todos) => {
      response.json(todos)
    })
    .catch((err: Error) => {
      response.status(500).send(err.message)
    })
})

export default router
