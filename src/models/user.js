const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
  takenBooks: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("user", userShema);
