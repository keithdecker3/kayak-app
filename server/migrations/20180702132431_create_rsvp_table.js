
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rsvp', (table) => {
    table.increments(),
    table.string('user_email'),
    table.string('run_id'),
    table.boolean('attending')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
