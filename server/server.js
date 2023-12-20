/*const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Started listening on  ${PORT}`);
});*/

const express = require('express');
const app = require('./app');

const server = express();

server.use('/api', app);

module.exports = server;
