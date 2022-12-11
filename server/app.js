const expres = require("express");
const cors = require("cors");
const passport = require("passport");
const app = expres();

//database conection
require("./config/database");

//cors midelware
app.use(cors());
app.use(expres.urlencoded({ extended: true }));
app.use(expres.json());

//passport
app.use(passport.initialize());
require("./config/passport");

//Routers
app.use("/", require("./routers/index"));
app.use("/", require("./routers/register.router"));
app.use("/", require("./routers/login.router"));
app.use("/", require("./routers/router.profile"));

// routing error
app.use("*", (req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

//server error
app.use((err, req, res, next) => {
  res.status(500).send({
    error: err.message,
    message: "somthing broke",
  });
  console.log(err.message);
});

module.exports = app;
