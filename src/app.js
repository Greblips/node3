const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");
const loggerTwo = require("./middlewares/loggerTwo");

dotenv.config();

const app = express();

const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

const hello = (request, response) => {
  response.status(200);
  response.send("Welcome,сучки");
};
app.use(cors);
app.use(loggerOne);
app.use(loggerTwo);
app.use(bodyParser.json());

app.get("/", hello);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from Post");
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`сервер запущен по адресу ${API_URL}:${PORT}`);
});
