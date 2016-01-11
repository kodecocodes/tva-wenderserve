"use strict";

const dataStorePhotos = require('./store/photostore.json');

class PhotoStore {
  constructor(photoData) {
    photoData = photoData || dataStorePhotos;
    this.photoData = photoData;
  }
  
  allPhotos() {
    return this.photoData;
  } 
}

module.exports = PhotoStore;
