const app = require("./app");
const Db = require("./config/db");

// Connect to the database
Db.Db;
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at port ${port}🚀`);
});
