const HttpException = require('./helper/httpException');
const httpStatusCode = require('./constants/httpStatusCode');
const UserEntity = require('./entities/UserEntity');
const userValidations = require('./validations/userValidations');

const deleteUser = (req, res, next) => {
  try {
    const userId = req.body.id;
    userValidations.userId(userId);
    const user = UserEntity.getOne(+userId);

    if (!user) {
      throw new HttpException(
        httpStatusCode.NOT_FOUND,
        'Usuário não encontrado'
      );
    }
    UserEntity.delete(userId);

    return res.send(httpStatusCode.NO_CONTENT);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteUser,
};
