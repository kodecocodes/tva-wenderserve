/*
 * Copyright (c) 2016 Razeware LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

 // 1:
const express = require('express');
const router = express.Router();

const VideoStore = require('../data/video_store');
const videoStore = new VideoStore();

// 2:
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

// 3:
router.route('/:video_id')
  .get((req, res) => {
    res.json(videoStore.videoById(req.params.video_id));
  });

// 4:
module.exports = router;