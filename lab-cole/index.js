'use strict';

const http = require("http");
const router = require("./")

const server 

server.start(process.env.PORT)
    .then(console.log)
    .catch(console.log);

server.stop()
    .then(console.log)
    .catch(console.log);