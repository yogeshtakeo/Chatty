import Express from "express";
import database_connection from "./database/connection";
import AuthenticationRouter from "./routes/User/Authenticate.route";

const app = Express();

database_connection();

app.use(Express.json());

app.use("/user", AuthenticationRouter);

const Port: number = 8080;
app.listen(Port, () => {
  console.log("Server is Listening:" + Port);
});
