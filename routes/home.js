const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.render('index', { title: 'My Express Appp', message: 'Hello World' });
});

module.exports = router;
