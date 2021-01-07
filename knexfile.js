// Update with your config settings.

const { pgConnection } = require("./config/vars")

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/count.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: "./database/count.db3"
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   }
  // },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
    directory: "./database/migrations",
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
