const express = require('express');
const router = express.Router();
const studentInfo = require('../models/studentInfo');
const { getAll, postNew } = require('../controller/routeController')

router.get('/', getAll)

router.post('/', postNew)

module.exports = router;