const notFoundHandler = (request, response, next) => {
  console.log("notFoundHandler");
  const error = new Error(`Not Found - ${request.originalUrl}`);

  response.status(404).json({ message: error.message });
  next();
};
module.exports = notFoundHandler;
