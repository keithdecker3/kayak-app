
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
          meet_lat: '39.758488',
          meet_lng: '-105.218509',
          difficulty: '3'
        },
        {
          river: 'Poudre',
          date: '6-29-18',
          start_time: '9:00AM',
          end_time: '2:00PM',
          description: 'chill trip brah, gonna be great',
          meet_lat: '39.758488',
          meet_lng: '-105.218509',
          difficulty: '3'
        },
        {
          river: 'Poudre',
          date: '6-29-18',
          start_time: '9:00AM',
          end_time: '2:00PM',
          description: 'chill trip brah, gonna be great',
          meet_lat: '39.758488',
          meet_lng: '-105.218509',
          difficulty: '3'
        },
        {
          river: 'Arkansas',
          date: '2018-07-09',
          start_time: '9:00AM',
          end_time: '2:00PM',
          description: 'Hanging out at the play park',
          meet_lat: '38.841539',
          meet_lng: '-106.118948',
          difficulty: '2'
        },
        {
          river: 'Arkansas',
          date: '2018-07-14',
          start_time: '10:00AM',
          end_time: '1:00PM',
          description: 'intermediate run down the gorge',
          meet_lat: '38.505733',
          meet_lng: '-105.952568',
          difficulty: '4'
        },
        {
          river: 'Arkansas',
          date: '2018-07-11',
          start_time: '8:00AM',
          end_time: '12:00PM',
          description: 'Meeting in Salida. Low easy flows',
          meet_lat: '38.535309',
          meet_lng: '-105.987114',
          difficulty: '3'
        },
        {
          river: 'Arkansas',
          date: '2018-07-09',
          start_time: '4:00PM',
          end_time: '6:00PM',
          description: 'Evening play park time',
          meet_lat: '38.841539',
          meet_lng: '-106.118948',
          difficulty: '2'
        }
      ]);
    });
};
