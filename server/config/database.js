const mongoose = require("mongoose");
const MONGO_URL = require("../config/config").DB_URL.url;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Mongodb is connected`);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
