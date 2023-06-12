const HttpException = require('../helper/httpException');
const httpStatusCode = require('../constants/httpStatusCode');

function userInfo(name, job) {
  if (!name)
    throw new HttpException(
      httpStatusCode.BAD_REQUEST,
      "O 'nome' é obrigatório"
    );
  if (!job)
    throw new HttpException(
      httpStatusCode.BAD_REQUEST,
      "A 'função' é obrigatória"
    );
}

function userId(id) {
  if (!id || isNaN(id))
    throw new HttpException(400, 'O ID do usuário é um número obrigatório');
}

module.exports = {
  userInfo,
  userId,
};
