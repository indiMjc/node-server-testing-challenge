const db = require('../data/dbConfig');

module.exports = {
  getAll,
  insert,
  remove
};

function getAll() {
  return db('users');
}

function insert(user) {
  return db('users')
    .insert(user)
    .returning('id');
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}
