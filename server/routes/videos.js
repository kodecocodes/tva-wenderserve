const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ videos: ['An array of videos will be here'] });   
});

router.get('/featured', (req, res) => {
  res.json({ videos: ['An array of the featured videos'] });
});

router.post('/search', (req, res) =>  {
  res.json({ videos: ['An array of the search results here']});
});

router.get('/watchlist', (req, res) => {
  res.json({ videos: ['An array of the watchlist videos here']});
})

router.route('/:video_id')
  .get((req, res) => {
    res.json({ video: 'result for a specific video here'});
  });

module.exports = router;