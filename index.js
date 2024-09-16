require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 3031;

server.listen(PORT, () => console.log(`\n** server up on port ${PORT} **\n`));
