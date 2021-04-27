const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smarthome', 'postgres', 'bu12345', {
  host: '18.139.85.83',
  port:'5432',
  dialect: 'postgres',
  logging: false
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

