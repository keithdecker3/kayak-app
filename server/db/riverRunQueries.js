const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('river_run')
  },
  getOne(river) {
    return knex('river_run').where('river', river)
  },
  create(river) {
    console.log('two')
    return knex('river_run').insert(river, '*')
  },
  update(id, river_run) {
    return knex('river_run').where('id', id).update(river_run, '*')
  },
  delete(id) {
    return knex('river_run').where('id', id).del()
  }
}