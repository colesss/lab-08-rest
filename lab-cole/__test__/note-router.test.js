'use strict';

// mock env 
process.env.PORT = 7000;

const server = require('../lib/server.js');
const superagent = require('superagent');

describe('/api/books', () => {
  afterAll(server.stop);
  beforeAll(server.start);

  describe('POST /api/books', () => {
    test('should respond with a 200', () => {
      expect(res.status).toEqual(200);
    });
  });

  describe('PUT /api/books', () => {
    test('should respond with a 200', () => {
      expect(res.status).toEqual(200);
    });
  });

  describe('DELETE /api/books', () => {
    test('should respond with a 204', () => {
      expect(res.status).toEqual(204);
    });
  });


});