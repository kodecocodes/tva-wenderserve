const dataStoreVideos = require('./store/videostore.json');

class Video {
  constructor(allVideos) {
    const videos = allVideos || dataStoreVideos;
    this.videos = videos;
  }
  
  videoById(id) {
    
  }
  
  featuredVideos() {
    
  }
  
  watchlist() {
    
  }
  
  search(searchTerm) {
    
  }
  
  allVideos() {
    
  }
}

module.exports = Video;