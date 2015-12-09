const express = require('express');
const path = require('path');

const videosRouter = require('./routes/videos');
const seriesRouter = require('./routes/series');
const photosRouter = require('./routes/photos');

const app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, '..', 'public');
var distPath = path.resolve(__dirname, '..', 'dist');


//: Static routes to serve the HTML, images and bundled JS
app.use(express.static(publicPath));
app.use(express.static(distPath));

//: Create a basic router
var router = express.Router();

//: Base of API
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the wenderServe API!'});
});

//: Add extra routers defined in other files
app.use('/api', router);
app.use('/api/videos', videosRouter);
app.use('/api/photos', photosRouter);
app.use('/api/series', seriesRouter);

//: Start the server
app.listen(port, function() {
	console.log('Server running on port ' + port);	
});
