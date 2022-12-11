const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const SECRET_KEY = require("../config/config").SECRET_KEY.key;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) {
    return res.status(401).send({
      success: false,
      message: "User is Not found! plase try agein",
    });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "Password is Incorrect",
    });
  }
  const payload = {
    id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "2d",
  });
  return res.status(200).send({
    success: true,
    message: "User is login successfully",
    token: "Bearer " + token,
  });
});

module.exports = router;
