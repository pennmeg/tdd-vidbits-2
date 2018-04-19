const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');
const {connectDatabase, disconnectDatabase} = require('../database-utilities');
const Video = require('../../models/video');
describe('Video model', () => {
  beforeEach(connectDatabase);
  afterEach(disconnectDatabase);
  describe('#title', () => {
    it('is a String', () => {
      const titleAsInt = 12;
      const video = new Video({ title: titleAsInt });
      assert.strictEqual(video.title, titleAsInt.toString());
    });
  });
});
module.exports = {
  connectDatabase,
  disconnectDatabase,
  Video
}
