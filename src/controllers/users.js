const { request } = require("express");

const getUsers = (request, response) => {
  //get all users
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  response.status(200);
  response.send(`User ${user_id}`);
};

const createUser = (request, response) => {
  response.status(201);
  response.send(request.body);
};

const updateUser = (request, response) => {
  //update user
};

const deleteUser = (request, response) => {
  //delete user
};
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
