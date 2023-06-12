const UserEntity = require('./UserEntity');
const userValidations = require('./userValidations');
const httpStatusCode = require('./httpStatusCode');

const createUser = (req, res, next) => {
  try {
    const name = req.body.name;
    const job = req.body.job;

    userValidations.userInfo(name, job);
    const newUser = new UserEntity(name, job);

    res.status(httpStatusCode.CREATED).json({ user: newUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
