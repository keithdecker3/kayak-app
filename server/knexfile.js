module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/kayak'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
