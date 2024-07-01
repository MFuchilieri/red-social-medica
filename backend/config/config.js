module.exports = {
    development: {
      username: 'postgres',
      password: '1947',
      database: 'medical_social_network',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
    test: {
      username: 'root',
      password: '1947',
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
    production: {
      username: 'root',
      password: '1947',
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
  };
  