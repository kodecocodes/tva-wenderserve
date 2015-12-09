const express = require('express');
const router = express.Router();

const VideoStore = require('../data/videos');
const videoStore = new VideoStore();

router.get('/', (req, res) => {
  res.json(videoStore.allVideos());   
});

router.get('/featured', (req, res) => {
  res.json(videoStore.featuredVideos());
});

router.post('/search', (req, res) =>  {
  res.json(videoStore.search(req.body.q));
});

router.get('/watchlist', (req, res) => {
  res.json(videoStore.watchlistVideos());
})

router.route('/:video_id')
  .get((req, res) => {
    res.json(videoStore.videoById(req.params.video_id));
  });

module.exports = router;
