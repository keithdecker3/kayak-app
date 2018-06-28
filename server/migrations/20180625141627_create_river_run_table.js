
exports.up = function(knex, Promise) {
  return knex.schema.createTable('river_run', (table) => {
    table.increments(),
    table.text('river'),
    table.string('date'),
    table.string('start_time'),
    table.string('end_time'),
    table.string('description'),
    table.decimal('meet_lat'),
    table.decimal('meet_lng'),
    table.integer('difficulty')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('river_run')
};
