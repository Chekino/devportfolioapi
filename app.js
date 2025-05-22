require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const profilRouter = require("./routes/profilRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/profils", profilRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(" server is running.");
});

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
