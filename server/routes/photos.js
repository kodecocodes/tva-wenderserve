const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ photos: ['An array of photos will be here'] });   
});

module.exports = router;