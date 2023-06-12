const httpStatusCode = require('../constants/httpStatusCode');
const UserEntity = require('../entities/UserEntity');
const HttpException = require('../helper/httpException');
const userValidations = require('../validations/userValidations');

const userRole = async (request, _response, next) => {
  try {
    const userId = request.query.userId;

    if (!userId)
      throw new HttpException(
        httpStatusCode.BAD_REQUEST,
        'Informe o usuário que está fazendo a solicitação'
      );
    userValidations.userId(userId);

    const user = UserEntity.getOne(+userId);

    if (!user)
      throw new HttpException(
        httpStatusCode.NOT_FOUND,
        'Usuário não encontrado!'
      );

    if (user.role !== 'admin') {
      throw new HttpException(
        httpStatusCode.UNAUTHORIZED,
        'Você não tem permissão para acessar este serviço!'
      );
    }
  } catch (error) {
    console.log(error);

    next(error);
  }
  next();
};

module.exports = userRole;
