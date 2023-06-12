const HttpException = require('./helper/httpException');
const httpStatusCode = require('./constants/httpStatusCode');
const UserEntity = require('./entities/UserEntity');
const userValidations = require('./validations/userValidations');

const getUserAccessCount = (req, res, next) => {
  try {
    const userId = req.params.id;
    userValidations.userId(userId);
    const user = UserEntity.getOne(+userId);

    if (!user) {
      throw new HttpException(
        httpStatusCode.NOT_FOUND,
        'Usuário não encontrado'
      );
    }

    res.status(httpStatusCode.OK).json({
      message: `O usuário ${user.name} foi lido ${user.profileViews} vezes.`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserAccessCount,
};
