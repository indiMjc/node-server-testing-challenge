const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res) => {
  Users.getAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => console.log(err));
});

module.exports = router;
