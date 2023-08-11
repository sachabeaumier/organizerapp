import connection from './connection'
import { Todo } from '../../client/common/todo'

export function getAllTodos(db = connection): Promise<Todo[]> {
  return db('todos').select('*')
}

export function getOneTodo(id: number, db = connection): Promise<Todo> {
  return db('todos').first().where({ id })
}

export function addTodo(newTodo: Todo, db = connection): Promise<Todo> {
  return db('todos').insert({ ...newTodo })
}

export function deleteTodo(id: number, db = connection): Promise<number> {
  return db('todos').delete().where('id', id)
}

export function updateTodo(updateTodo: Todo, db = connection): Promise<Todo[]> {
  return db('todos')
    .select()
    .where('todos.id', updateTodo.id)
    .first()
    .update({
      task: updateTodo.task,
      description: updateTodo.description,
      img: updateTodo.img,
    })
    .returning(['id', 'task', 'description', 'img'])
}
