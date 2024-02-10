const loggerURL = (request, response, next) => {
  console.log("адрес запроса:", request.originalUrl);
  next();
};
module.exports = loggerURL;
