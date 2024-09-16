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

    it('should return a JSON object', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it('should return { api: "up" }', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body.api).toBe('up');
        });
    });
  });
});
