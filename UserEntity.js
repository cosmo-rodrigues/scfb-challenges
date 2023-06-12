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

    console.log('newUser: ', newUser);
    UserEntity.data.push(newUser);

    console.log('Data: ', UserEntity.data);

    return newUser;
  }
}

module.exports = new UserEntity();
