import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World By Chat</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello World By Hello</h1>");
});

const Port: number = 8080;
app.listen(Port, () => {
  console.log("Server is Listening:" + Port);
});
