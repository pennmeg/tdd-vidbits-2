const { assert } = require('chai');
describe('user visits create page', () => {
  describe('video form', () => {
    it('saves video', () => {
      const title = 'Cute Puppies';
      const description =  'Puppies being adorable.';
      const videoUrl = 'https://www.youtube.com/watch?v=-d_hu0O_ww4';
      browser.url('views/videos/create');
      browser.setValue('input[id=title-input]', title);
      browser.setValue('input[id=description-input]', description);
      browser.setValue('input[id=videoUrl-input]', videoUrl);
      browser.click('input[type=submit]');
      assert.include(browser.getText('#title-input'), title);
      assert.include(browser.getText('#description-input'), description);
      assert.include(browser.getText('#videoUrl-input'), videoUrl);
    });
  });
});
