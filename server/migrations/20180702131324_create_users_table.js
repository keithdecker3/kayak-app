
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments(),
    table.string('user_email'),
    table.string('first_name'),
    table.string('last_name'),
    table.string('skill'),
    table.string('safety'),
    table.string('profile_picture')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
