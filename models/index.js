require("dotenv").config();

const { Sequelize } = require("sequelize");
const ProfilModel = require("./profil");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

console.log("Connexion à la base :", process.env.DB_NAME);

const Profil = ProfilModel(sequelize);

module.exports = {
  sequelize,
  Profil,
};
