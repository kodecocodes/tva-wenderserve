const express = require('express');
const router = express.Router();

const PhotoStore = require('../data/photos');
const photoStore = new PhotoStore();

router.get('/', (req, res) => {
  res.json(photoStore.allPhotos());
});

module.exports = router;
