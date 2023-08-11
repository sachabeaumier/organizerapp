/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'cut hair', description: 'go to', img: '' },
    { id: 2, task: 'task', description: 'abce', img: '' },
    { id: 3, task: 'task3', description: 'abce', img: '' },
    { id: 4, task: 'rowValue4', description: 'abce', img: '' },
    { id: 5, task: 'rowValue5', description: 'abce', img: '' },
    { id: 6, task: 'rowValue6', description: 'abce', img: '' },
  ])
}
