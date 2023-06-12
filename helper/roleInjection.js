/**

  Esta função foi criada para tender o teste 6. Aqui é possível definir
  o tipo de usuário e as permissões que ele terá nos testes 3 e 4 baseado
  no job dele, que pode ser definido com um sufixo @admin

 */

function roleInjection(userJob) {
  const getRoleByUserJob = userJob.split('@')[1];
  const userRole = getRoleByUserJob === 'admin' ? 'admin' : 'user';

  return userRole;
}

module.exports = roleInjection;
