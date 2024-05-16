import { Sequelize } from 'sequelize';
import { join } from 'path';
import __dirname from './utils.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(__dirname, 'database.sqlite')
});

export default sequelize;
