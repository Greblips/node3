const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const userBooksRouter = require("./routes/userBooks");
const logger = require("./middlewares/logger");
// const notFoundHandler = require("./middlewares/notFoundHandler");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/backend",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Соединение с MongoDB успешно установлено");
  })
  .catch((error) => {
    console.error("Ошибка при соединении с MongoDB:", error);
  });

const app = express();

const hello = (request, response) => {
  response.status(200);
  response.setHeader("Content-Type", "text/html");
  response.send("<h1>Welcome</h1>");
};
app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(userBooksRouter);

// app.use(notFoundHandler);

app.get("/", hello);

app.use(bookRouter);
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`CORS-enabled, сервер запущен по адресу ${API_URL}:${PORT}`);
});
