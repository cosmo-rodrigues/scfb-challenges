function roleInjection(userJob) {
  const getRoleByUserJob = userJob.split('@')[1];
  const userRole = getRoleByUserJob === 'admin' ? 'admin' : 'user';

  return userRole;
}

module.exports = roleInjection;
