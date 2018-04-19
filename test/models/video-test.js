const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

async function connectDatabase() {
  await mongoose.connect(databaseUrl, options);
  await mongoose.connection.db.dropDatabase();
}

async function disconnectDatabase() {
  await mongoose.disconnect();
}

module.exports = {
  connectDatabase,
  disconnectDatabase,
}

describe('Model: Video', () => {
  describe('#Title', () => {
    it('Should be a String', () => {
      const titleAsInt = 123;
      const video = new Video({ title: titleAsInt });

      assert.strictEqual(video.title, titleAsInt.toString());
    });
  });
});
