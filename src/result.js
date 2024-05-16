import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const Result = sequelize.define('Result', {
  dia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  aciertos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  errores: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  aprobado: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Result;
