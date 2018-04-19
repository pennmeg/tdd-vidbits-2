const {assert} = require('chai');

describe('user visits landing page', () => {
  describe('no existing videos', () => {
    it('shows no videos', () => {
      browser.url('/');
      assert.equal(browser.getText('#videos-container'), '');
    });
  });
  describe('/videos/create', () => {
    it('navigates to create page', () => {
      browser.url('/');
      browser.click('#add-video');
      assert.include(browser.getText('body'), 'Save a Video');
    });
  });
});
