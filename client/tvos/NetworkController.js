class NetworkController {
  constructor(host) {
    this._host = host;
  }
  
  urlFromPath(path) {
    return this._host + path;
  }
  
  _ajax(verb, path, data) {
    const url = this.urlFromPath(path);
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open(verb, url);
  
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      };
      
      req.onerror = function() {
        reject(Error("Network Error"));
      };
  
      req.setRequestHeader("Content-Type",
        "application/json;charset=UTF-8");
      req.send(data);
    });
  }

  getPath(path) {
    return this._ajax('GET', path, null);
  }

  postPath(path, data) {
    return this._ajax('POST', path, data);
  }

  postAndReturnJSON(path, data) {
    const json = JSON.stringify(data);
    return this.postPath(path, json).then(JSON.parse);
  }

  getJSON(path) {
   return this.getPath(path).then(JSON.parse);
  }
}

module.exports = NetworkController;