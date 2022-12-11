const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Home page</h1>");
});

module.exports = router;
