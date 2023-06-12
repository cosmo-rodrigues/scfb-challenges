/**

  Neste desafio havia um erro de typo ao criar um novo usuário, o campo job estava
  sendo salvo em uma variável chamada jov, causando um erro ao passar job como valor
  para o objeto, pois ele não existia.

  Outro problema aqui era na hora de salvar o novo usuário dentro de uma variável
  que recebia os valores prévios do fakeData, pois esses dados existiram apenas
  nesse ponto da aplicação, não persistindo para serem listados posteriormente

 */

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
