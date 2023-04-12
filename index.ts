const Express = require("express");
const database_connection = require("./database/connection");

const app = Express();

database_connection();

app.get("/", (req, res) => {
  res.send("");
});

const Port: number = 8080;
app.listen(Port, () => {
  console.log("Server is Listening:" + Port);
});
