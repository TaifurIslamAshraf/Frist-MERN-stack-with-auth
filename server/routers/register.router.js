const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/users.model");

//Register Router
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (user) return res.status(400).send("User alredy exists");

    bcrypt.hash(password, 10, async (err, hash) => {
      const newUser = new User({
        username: username,
        password: hash,
      });
      await newUser
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: "user is created",
            user: {
              id: user._id,
              username: user.username,
            },
          });
        })
        .catch((err) => {
          res.status(401).send({
            success: false,
            message: "user is not created",
            error: err.message,
          });
        });
    });
  } catch (error) {
    res.status(500).send({
      errorMessage: error.message,
    });
  }
});

module.exports = router;
