const {assert} = require('chai');
const request = require('supertest');
const app = require('../../app');
const Video = require('../models/video');
const {jsdom} = require('jsdom');
const {mongoose, databaseUrl, options} = require('../../database');
const {connectDatabase, disconnectDatabase} = require('../database-utilities');
const {buildItemObject, seedItemToDatabase, parseTextFromHTML,} = require('../test-utils')

describe('server path /videos', () => {
  beforeEach(connectDatabase);
  afterEach(disconnectDatabase);
  describe('GET', () => {
    it('renders all videos', async () => {
      const newVideo = buildItemObject();
      const response = await request(app)
          .post('views/videos/create')
          .type('form')
          .send(newVideo);
      const createdVideo = await Item.findOne(newVideo);
      assert.isOk(newVideo, 'Video was created successfully in the database');
    });
    it('renders selected video:id', async () => {
      const video = await seedItemToDatabase();
      const response = await request(app)
      .get(`/videos/:id'`);
      assert.include(parseTextFromHTML(response.text, '.video-title'), video.title);
      const descriptionElement = findImageElementBySource(response.text, video.description);
      assert.include(parseTextFromHTML(response.description, '.video-description'), video.description);
      const videoElement = findVideoElementBySource(response.text, video.videoUrl);
      assert.equal(videoElement.src, video.videoUrl);
    });
  });
  describe('POST', async () => {
    it('creates and stores a new video', async () => {
      const newVideo = buildItemObject();
      const url = domain.create();
      const response = await request(app)
        .post('/videos')
        .type('form')
        .send(newVideo);
      const videoSaved = Video.findOne(newVideo);
      assert.isOk(videoSaved, 'Video was not saved in the database');
      assert.include(response.send(`<h1>${title}</h1><p>${description}</p>`));
      assert.include(iFrame);
    });
    it('redirect to /', async () => {
      const newVideo = buildItemObject();
      const response = await request(app)
          .post('/videos/create')
          .type('form')
          .send(newVideo);
      assert.equal(response.status, 302);
      assert.equal(response.headers.location, '/');
    });
    it('displays an error message when supplied an empty title', async () => {
      const invalidVideoToCreate = {
        title: '',
        description: 'test',
        imageUrl: 'https://www.youtube.com'
      };
      const response = await request(app)
        .post('/videos/create')
        .type('form')
        .send(invalidVideoToCreate);
      const allVideos = await Video.find({});
      assert.equal(allVideos.length, 0);
      assert.equal(response.status, 400);
      assert.include(parseTextFromHTML(response.text, 'form'), 'required');
    });
    it('displays an error message when supplied an empty videoUrl', async () => {
      const invalidVideoToCreate = {
        title: 'test',
        description: 'test'
      };
      const response = await request(app)
        .post('/video/create')
        .type('form')
        .send(invalidVideoToCreate);
      const allVideos = await Video.find({});
      assert.equal(allVideos.length, 0);
      assert.equal(response.status, 400);
      assert.include(parseTextFromHTML(response.text, 'form'), 'required');
    });
  });
});
