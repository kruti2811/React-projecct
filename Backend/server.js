require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models"); // Import Sequelize models
const userRoutes = require("./routes/userRoutes"); // Import user routes

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

// Sync Database & Start Server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
