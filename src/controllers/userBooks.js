const User = require("../models/user");

const getUserBooks = (request, response) => {
  const { user_id } = request.params;

  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      const userBooks = user.takenBooks;
      return response.status(200).json(userBooks);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ message: "Что-то пошло не так" });
    });
};

const createUserBook = (request, response) => {
  const { user_id } = request.params;
  const { book_id } = request.params;

  return User.findByIdAndUpdate(
    user_id,
    { $addToSet: { takenBooks: book_id } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      return response.status(201).json(user);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ message: "Что-то пошло не так" });
    });
};

const deleteUserBook = (request, response) => {
  const { user_id } = request.params;
  const { book_id } = request.params;

  return User.findByIdAndUpdate(
    user_id,
    { $pull: { takenBooks: book_id } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      return response.status(204).json(user);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ message: "Что-то пошло не так" });
    });
};

module.exports = {
  createUserBook,
  getUserBooks,
  deleteUserBook,
};
