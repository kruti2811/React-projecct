// AdminBackend/models/index.js
import { Sequelize } from 'sequelize'; // Import the config.json for DB connection
// import config from '../config/config.json' assert { type: 'json' };;
import fs from 'fs';
import path from 'path';

const configPath = path.resolve('config/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Create the Sequelize instance
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

// Test the database connection
sequelize.authenticate()
  .then(() => console.log("DB connected ✅"))
  .catch(err => console.error("Connection error ❌", err));

export default sequelize;
