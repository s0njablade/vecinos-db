module.exports = {

  development: {
    client: 'pg',
    connection: '//localhost/vecinos-db'
  },

  production: {
    client: 'pp',
    connection: process.env.DATABASE_URL
  }

};
