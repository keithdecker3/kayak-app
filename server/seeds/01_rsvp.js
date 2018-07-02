
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rsvp').del()
    .then(function () {
      // Inserts seed entries
      return knex('rsvp').insert([
        {
          user_email: 'testemail@tesemail.com',
          first_name: 'Tester',
          last_name: 'McTest',
          skill: 'intermediate',
          safety: 'intermediate',
          profile_picture: ''
        }
      ]);
    });
};
