const router = require("express").Router();

const {
  getUserBooks,
  createUserBook,
  deleteUserBook,
} = require("../controllers/userBooks");

router.get("/users/:user_id/books", getUserBooks);
router.delete("/users/:user_id/books/:book_id", deleteUserBook);
router.post("/users/:user_id/books/:book_id", createUserBook);

module.exports = router;
