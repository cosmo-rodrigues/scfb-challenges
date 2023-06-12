/**

  Este método fazia busca por usuário utilizando o nome dele como parâmetro
  de query, no entanto esse é um tipo de busca que não é muito eficiente,
  pois nome não é valor do tipo único em uma tabela, então haveriam vários
  resultados possíveis, e isso acabaria retornando um usuário, que talvez não
  fosse o esperado.

  Mudei a busca por ID como parâmetro da url, pois traz exatamente o usuário
  buscado. Outra abordagem seria inserir mais um campo no usuário, algo que
  fosse único, como um email, ou cpf.

 */

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

    user.profileViews++;

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
