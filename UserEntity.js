const data = require('./fakeData');

module.exports = class UserEntity {
  static data = data;

  name;
  job;

  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  create(name, job) {
    const newUser = {
      id: UserEntity.data.length + 1,
      name,
      job,
    };

    UserEntity.data.push(newUser);

    return UserEntity.data;
  }
};
