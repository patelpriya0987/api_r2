const express = require('express');
const router = express.Router();
const recordRoute = require('./recordRoutes.js');

router.get('/', (req, res) => {
    res.send('Welcome to the API , for records use /record');

});

router.use('/record', recordRoute);

module.exports = router;