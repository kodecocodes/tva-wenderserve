const express = require('express');
const path = require('path');

const app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, '..', 'public');
var distPath = path.resolve(__dirname, '..', 'dist');

app.use(express.static(publicPath));
app.use(express.static(distPath));

var router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the wenderServe API!'});
});

app.use('/api', router);

app.listen(port, function() {
	console.log('Server running on port ' + port);	
});
