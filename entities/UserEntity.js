const data = require('../fakeData');

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

  delete(id) {
    const newData = UserEntity.data.filter((user) => user.id !== id);
    UserEntity.data = newData;
    return;
  }

  update(id, updatedUser) {
    const index = UserEntity.data.findIndex((user) => user.id === id);
    UserEntity.data[index] = updatedUser;

    return UserEntity.data[index];
  }
}

module.exports = new UserEntity();
