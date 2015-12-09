import Mustache from 'mustache';

function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    
    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

window.onload = function() {
  const dataURL = '/api/videos/watchlist';
  const templateURL = '/html/_videoList.mustache';
  
  const dataPromise = get(dataURL).then(JSON.parse);
  const templatePromise = get(templateURL);
  
  Promise.all([templatePromise, dataPromise]).then(res => {
    return Mustache.render(res[0], res[1]);
  }).then(docString => {
    console.log(docString);
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = docString;
  });
}
