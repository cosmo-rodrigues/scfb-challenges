const data = require('./fakeData');

class UserEntity {
  static data = data;

  getAll() {
    return UserEntity.data;
  }

  getOne(id) {
    return UserEntity.data.find((user) => user.id === id);
  }

  create(name, job) {
    const newUser = {
      id: UserEntity.data.length + 1,
      name,
      job,
    };

    UserEntity.data.push(newUser);

    return newUser;
  }
}

module.exports = new UserEntity();
