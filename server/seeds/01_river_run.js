
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('river_run').del()
    .then(function () {
      // Inserts seed entries
      return knex('river_run').insert([
        {
          river: 'Poudre',
          date: '6-29-18',
          start_time: '9:00AM',
          end_time: '2:00PM',
          description: 'chill trip brah, gonna be great',
          meet_lat: 39.758488,
          meet_lng: -105.218509,
          difficulty: 3
        },
        {
          river: 'Poudre',
          date: '6-29-18',
          start_time: '9:00AM',
          end_time: '2:00PM',
          description: 'chill trip brah, gonna be great',
          meet_lat: 39.758488,
          meet_lng: -105.218509,
          difficulty: 3
        },
        {
          river: 'Poudre',
          date: '6-29-18',
          start_time: '9:00AM',
          end_time: '2:00PM',
          description: 'chill trip brah, gonna be great',
          meet_lat: 39.758488,
          meet_lng: -105.218509,
          difficulty: 3
        }
      ]);
    });
};
