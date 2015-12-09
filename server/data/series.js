const dataStoreSeries = require('./store/seriesstore.json');

class Series {
  constructor(seriesData) {
    seriesData = seriesData || dataStoreSeries;
    this.seriesData = seriesData;
  }
  
  allSeries() {
    return this.seriesData;
  }
}

module.exports = Series;
