const express = require("express");
const port = 3000;
const root = "./routes/users.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", require(root));

app.listen(port, () => {
  console.log("Server start at port " + port);
});
