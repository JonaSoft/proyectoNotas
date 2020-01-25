/*jshint esversion: 8 */

const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('Notes fron databases');
});

module.exports = router;