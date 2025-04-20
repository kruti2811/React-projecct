// AdminBackend/models/user.model.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Import the sequelize instance from index.js

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure that username is unique
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure that email is unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users', // Ensure this matches the table name in your DB
    timestamps: false, // If you don't want Sequelize to manage createdAt/updatedAt
  }
);

export default User;
