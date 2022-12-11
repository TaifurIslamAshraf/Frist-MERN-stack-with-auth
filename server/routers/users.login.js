const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  res.status(200).send("Registation successfully");
});

module.exports = router;
