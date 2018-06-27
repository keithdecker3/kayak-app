
exports.up = function(knex, Promise) {
  return knex.schema.createTable('river_run', (table) => {
    table.increments(),
    table.text('river'),
    table.string('date'),
    table.string('start_time'),
    table.string('end_time'),
    table.string('description'),
    table.string('start_point'),
    table.string('end_point'),
    table.integer('difficulty')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('river_run')
};
