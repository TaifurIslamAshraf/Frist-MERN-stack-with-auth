const app = require("./app");
const config = require("./config/config");

app.listen(config.app.PORT, () => {
  console.log(`Server is running at http://localhost:${config.app.PORT}`);
});
