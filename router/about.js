const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send("This is the about route");
})

module.exports = router;