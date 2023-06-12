const HttpException = require('./httpException');
const httpStatusCode = require('./httpStatusCode');

module.exports = (error, _request, response, next) => {
  const { status, message } = error;

  try {
    if (error instanceof HttpException) {
      return response.status(status).json({ message });
    }
  } catch (error) {
    return response
      .status(httpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro interno no servidor' });
  }
  return next();
};
