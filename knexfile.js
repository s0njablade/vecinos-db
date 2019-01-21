module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/vecinos-db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
