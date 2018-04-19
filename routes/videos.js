const router = require('express').Router();
// Import model
const Video = require('../models/video');
router.get('/', (req, res, next) => {
  res.render('index');
};
// GET
router.get('/videos/index', async (req, res, next) => {
  const items = await Video.find({});
  res.render('index', {videos});
});
router.get('/videos/:id', async (req, res, next) => {
  const videos = await Schema.findById(req.params.videoId);
  res.render('/videos');
});
router.get('/videos/create', async (req, res, next) => {
  res.render('/videos');
});
// POST
router.post('/videos/create', async (req, res, next) => {
  const newVideo = Video.create();
  response.render(newVideo, 'videos/show');
  const {title, description, imageUrl} = req.body;
  const newVideo = new Video({title, description, videoUrl});
        newVideo.validateSync();
    if (newVideo.errors) {
        res.status(400).render('create', {newVideo: newVideo});
    } else {
        await newVideo.save();
        res.redirect('/');
    }
  });
// UPDATE
//router.put('', async (req, res, next) => {});
// DELETE
//router.delete('', async (res, res, next) => {});
module.exports = router;
