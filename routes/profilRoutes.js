const express = require("express");
const {
  getAllProfils,
  getProfil,
  createProfil,
  deleteProfil,
} = require("../controllers/profilControllers");

const router = express.Router();

router.get("/", getAllProfils);
router.post("/", createProfil);
router.get("/:id", getProfil);
router.delete("/:id", deleteProfil);

module.exports = router;
