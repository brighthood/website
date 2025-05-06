import app from "./app";
import { Db } from "../config/db";

// Connect to the database
Db;
const port = process.env.PORT! || 3000;
app.listen(port, () => {
  console.log(`server started at port ${port}🚀`);
});
