const UserEntity = require('./UserEntity');
const userValidations = require('./userValidations');
const httpStatusCode = require('./httpStatusCode');
const HttpException = require('./httpException');

const createUser = (req, res, next) => {
  try {
    const name = req.body.name;
    const job = req.body.job;

    userValidations.userInfo(name, job);
    const newUser = new UserEntity();
    const createdUser = newUser.create(name, job);

    res.status(httpStatusCode.CREATED).json({ user: createdUser });
  } catch (error) {
    next(error);
  }
};

const getUser = (req, res, next) => {
  try {
    const userId = req.params.id;
    if (!userId || isNaN(userId))
      throw new HttpException(400, 'O ID do usuário é um número obrigatório');

    let user = UserEntity.getOne(+userId);

    if (user) {
      res.status(httpStatusCode.OK).json({ user });
    } else {
      res
        .status(httpStatusCode.NOT_FOUND)
        .json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

const getUsers = (req, res, next) => {
  try {
    const users = UserEntity.getAll();
    res.status(httpStatusCode.OK).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
};
