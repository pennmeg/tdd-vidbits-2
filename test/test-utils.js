const {jsdom} = require('jsdom');
const Video = require('../models/video');
// Sample
const buildItemObject = (options = {}) => {
  const title = options.title || 'Cute Puppies';
  const videoUrl = options.videoUrl || 'https://www.youtube.com/watch?v=-d_hu0O_ww4';
  const description = options.description || 'Puppies being adorable.';
  return {title, imageUrl, description};
};
// Seed
const seedItemToDatabase = async (options = {}) => {
  const video = await Video.create(buildItemObject(options));
  return video;
};
// Extract from selector
const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};
module.exports = {
  buildItemObject,
  seedItemToDatabase,
  parseTextFromHTML,
};
