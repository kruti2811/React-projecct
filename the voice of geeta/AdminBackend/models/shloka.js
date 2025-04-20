// models/Shloka.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Shloka = sequelize.define("Shloka", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  visible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
},
 {
  tableName: "shlokas",
  timestamps: true
});

export default Shloka;