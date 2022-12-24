import { Sequelize } from 'sequelize';
import db from '../configs/database.js';

const { DataTypes } = Sequelize;

const Users = db.define('users', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  freezeTableName: true,
});

export default Users;
