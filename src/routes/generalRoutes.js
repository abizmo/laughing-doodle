const express = require('express');
const router = express.Router();
const path = require('path');

const catchError = require('../lib/utils/catchError');

router.get('/', catchError((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
}));

module.exports = router;