const HttpException = require('./helper/httpException');
const httpStatusCode = require('./constants/httpStatusCode');
const UserEntity = require('./entities/UserEntity');
const userValidations = require('./validations/userValidations');

const updateUser = (req, res, next) => {
  try {
    const name = req.body.name;
    const job = req.body.job;
    const userId = req.params.id;

    userValidations.userId(userId);

    const user = UserEntity.getOne(+userId);

    if (!user) {
      throw new HttpException(
        httpStatusCode.BAD_REQUEST,
        'Usuário não encontrado'
      );
    }

    userValidations.userInfo(name, job);
    user.name = name;
    user.job = job;
    const updatedUser = UserEntity.update(userId, user);

    res.status(httpStatusCode.OK).json({ user: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateUser,
};
