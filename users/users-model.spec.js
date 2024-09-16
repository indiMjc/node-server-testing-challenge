const Users = require('./users-model');
const db = require('../data/dbConfig');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('insert()', () => {
    it('should add new user to db', async () => {
      await Users.insert({ name: 'skynet' });

      const users = await db('users');
      expect(users).toHaveLength(1);
    });
  });
});
