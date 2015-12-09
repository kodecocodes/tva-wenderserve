const express = require('express');
const router = express.Router();

const SeriesStore = require('../data/series');
const seriesStore = new SeriesStore();

router.get('/', (req, res) => {
  res.json(seriesStore.allSeries());
});

module.exports = router;