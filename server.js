const express = require('express');

const userRouter = require('./users/users-router');

const server = express();

server.use(express.json());

server.use('/users', userRouter);

server.use('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
