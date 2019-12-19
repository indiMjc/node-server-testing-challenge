const express = require('express');

const userRouter = require('./users/users-router');

const server = express();

server.use(express.json());

server.use('/users', userRouter);

server.use('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
