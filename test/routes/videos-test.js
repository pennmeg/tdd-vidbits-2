const {assert} = require('chai');
const request = require('supertest');
const app = require('../../app');

describe('server path /videos', () => {
  describe('post', () => {
    it('returns 201 status', async () => {
      const response = await request(app)
        .post('/videos')
        .type('form');
        assert.equal(response.status, 201);
    });
  });
})
