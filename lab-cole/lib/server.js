'use strict';

const http = require('http');
const router = require('./router.js');

// register rotues
require('../route/note-router.js');

// add router to server
const app = http.createServer(router.route);
let isOn = false;

module.exports = {
  start: () =>  {
    return new Promise((resolve, reject) => {
      if(isOn)
        return reject(new Error('__SERVER_ERROR__ server is allready running'));
      if(!process.env.PORT)
        return reject(new Error('__ENV_ERROR__ process.env.PORT must be set'));
      app.listen(process.env.PORT, (err) => {
        if(err) return reject(err);
        isOn = true;
        console.log('server up ::', process.env.PORT);
        resolve();
      });
    });
  },
  stop: () => {
    return new Promise((resolve, reject) => {
      if(!isOn)
        return reject(new Error('__SERVER_ERROR__' + 'server is allready off'));
      app.close((err) => {
        if(err) 
          return reject(err);
        isOn = false;
        resolve();
      });
    });
  }
};