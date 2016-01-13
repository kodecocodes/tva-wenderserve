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

 "use strict";

const dataStoreVideos = require('./store/videostore.json');
const featuredVideos = require('./store/featuredvideos.json');
const watchlistVideos = require('./store/watchlist.json');

class VideoStore {
  constructor(allVideos, featuredIds, watchlistIds) {
    this._videos = allVideos || dataStoreVideos;
    this._featuredIds = featuredIds || featuredVideos;
    this._watchlistIds = watchlistIds || watchlistVideos;
  }

  allVideos() {
    return this._videos;
  }

  videoById(id) {
    return this._videos.find( v => v.id === id );
  }

  featuredVideos() {
    return this._featuredIds.map(this.videoById.bind(this));
  }

  watchlistVideos() {
    return this._watchlistIds.map(this.videoById.bind(this));
  }

  search(searchTerm) {
    return this._videos.filter(v => {
      const lcSearchTerm = searchTerm.toLowerCase();
      return v.title.toLowerCase().includes(lcSearchTerm)
        || v.presenter.toLowerCase().includes(lcSearchTerm);
    });
  }
}

module.exports = VideoStore;
