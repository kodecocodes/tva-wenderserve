"use strict";

const dataStoreSeries = require('./store/seriesstore.json');

class SeriesStore {
  constructor(seriesData) {
    seriesData = seriesData || dataStoreSeries;
    this.seriesData = seriesData;
  }
  
  allSeries() {
    return this.seriesData;
  }
}

module.exports = SeriesStore;
