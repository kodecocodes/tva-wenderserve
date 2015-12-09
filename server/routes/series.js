const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ series: ['An array of series will be here'] });   
});

module.exports = router;