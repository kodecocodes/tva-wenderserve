const dataStorePhotos = require('./store/photostore.json');

class Photo {
  constructor(photoData) {
    photoData = photoData || dataStorePhotos;
    this.photoData = photoData;
  }
  
  allPhotos() {
    return this.photoData;
  } 
}

module.exports = Photo;
