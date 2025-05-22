const Profil = require("../models/profil");

// Get All profils
const getAllProfils = async (req, res) => {
  try {
    const profils = await Profil.findAll();
    res.status(200).json(profils);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new profil
const createProfil = async (req, res) => {
  try {
    const { name, bio, skills } = req.body;
    const newProfil = await Profil.create({ name, bio, skills });
    res.status(201).json(newProfil);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a specific profil
const getProfil = async (req, res) => {
  try {
    const id = req.params.idù;
    const profil = await Profil.findByPk(id);
    res.status(200).json(profil);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete Profil
const deleteProfil = async (req, res) => {
  try {
    const id = req.params.id;
    const profil = await Profil.findByPk(id);
    await profil.destroy();
    res.status(200).json({ message: "Profil deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProfils,
  createProfil,
  getProfil,
  deleteProfil,
};
