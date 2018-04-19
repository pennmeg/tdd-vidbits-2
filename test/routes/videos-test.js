const {assert} = require('chai');
const request = require('supertest');
const app = require('../../app');
const {mongoose, databaseUrl, options} = require('../../database');

const {connectDatabase, disconnectDatabase} = require('../database-utilities');
const {buildItemObject, seedItemToDatabase, parseTextFromHTML,} = require('../test-utils')

describe('server path /videos', () => {
  beforeEach(async () => {
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
  });
  afterEach(async () => {
    await mongoose.disconnect();
  });
  describe('post', () => {
    it('returns 201 status', async () => {
      const response = await request(app)
        .post('/videos')
        .type('form');
        assert.equal(response.status, 201);
    });
  });
  describe('new video', () => {
    it('creates and stores a new video', async () => {
      const videoToCreate = buildVideoObject();
      const response = await request(app)
        .post('/videos/create')
        .type('form')
        .send(videoToCreate);
        const videoSaved = await Video.findOne({});
        assert.isOk(videoSaved, 'Video was not saved in the database');
        assert.include(response.send(`<h1>${title}</h1><p>${description}</p>`));
    });
  });
});
