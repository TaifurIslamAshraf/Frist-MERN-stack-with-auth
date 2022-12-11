const router = require("express").Router();
const passport = require("passport");

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
      },
    });
  }
);

module.exports = router;
