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

 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const videosRouter = require('./routes/videos');
const seriesRouter = require('./routes/series');
const photosRouter = require('./routes/photos');

const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '..', 'public');

//: Static routes to serve the HTML, images and bundled JS
app.use(express.static(publicPath));
const distPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(distPath));


//: Adding middleware
app.use(bodyParser.json());

//: Create a basic router
var router = express.Router();

//: Base of API
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the wenderServe API!'});
});


app.use('/api', router);
app.use('/api/videos', videosRouter);
app.use('/api/photos', photosRouter);
app.use('/api/series', seriesRouter);


//: Start the server
app.listen(port, function() {
  console.log('Server running on port ' + port);  
});

