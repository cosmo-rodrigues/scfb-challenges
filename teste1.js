const HttpException = require('./helper/httpException');
const httpStatusCode = require('./constants/httpStatusCode');
const UserEntity = require('./entities/UserEntity');
const userValidations = require('./validations/userValidations');

const getUser = (req, res, next) => {
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

    res.status(httpStatusCode.OK).json({ user });
  } catch (error) {
    next(error);
  }
};

const getUsers = (_req, res, next) => {
  try {
    const users = UserEntity.getAll();
    res.status(httpStatusCode.OK).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  getUsers,
};
