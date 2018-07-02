
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rsvp').del()
    .then(function () {
      // Inserts seed entries
      return knex('rsvp').insert([
        {
          user_email: 'testemail@email.com',
          run_id: '3',
          attending: true
        }
      ]);
    });
};
