const HttpException = require('./helper/httpException');
const httpStatusCode = require('./constants/httpStatusCode');
const UserEntity = require('./entities/UserEntity');
const roleInjection = require('./helper/roleInjection');
const userValidations = require('./validations/userValidations');

const createUser = (req, res, next) => {
  try {
    const name = req.body.name;
    const job = req.body.job;
    const userId = req.body.id;

    if (userId) {
      userValidations.userId(userId);

      const user = UserEntity.getOne(+userId);

      if (user) {
        throw new HttpException(
          httpStatusCode.BAD_REQUEST,
          'Usuário já cadastrado'
        );
      }
    }

    userValidations.userInfo(name, job);

    const role = roleInjection(job);
    const createdUser = UserEntity.create(name, job, role);

    res.status(httpStatusCode.CREATED).json({ user: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
