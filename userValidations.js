const HttpException = require('./httpException');
const httpStatusCode = require('./httpStatusCode');

function userInfo(name, job) {
  if (!name)
    throw new HttpException(httpStatusCode.BAD_REQUEST, 'O \'nome\' é obrigatório');
  if (!job)
    throw new HttpException(
      httpStatusCode.BAD_REQUEST,
      'A \'função\' é obrigatória'
    );
}

module.exports = {
  userInfo,
};
