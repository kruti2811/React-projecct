import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},  {
    tableName: 'users',  // Specify the correct table name
    timestamps: false,  // Disable automatic createdAt and updatedAt
  });

export default User;
