const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
  describe('environment', () => {
    it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });

  describe('GET /', () => {
    it('should return status 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
