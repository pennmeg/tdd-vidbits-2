const {assert} = require('chai');

describe('user visits landing page', () => {
  describe('no existing videos', () => {
    it('shows no videos', () => {
      browser.url('/');
      assert.equal(browser.getText('#videos-container'), '');
    });
  });
});
