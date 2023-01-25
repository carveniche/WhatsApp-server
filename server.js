const app = require("./index");
// require("dotenv").config();
// const connect = require("./config/db");

const PORT = process.env.PORT || 8001;

app.listen(PORT,async () => {
  console.log(`App is listening on Port ${PORT}..`);
});
