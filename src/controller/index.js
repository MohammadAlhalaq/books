const express = require('express');
const { get } = require('./home');
const { getBooks } = require('./get-books');
const { get404, get500 } = require('./error');


const router = express.Router();

router.get('/', get);
router.get('/book-name', getBooks);
router.use('*', get404);
router.use(get500);

module.exports = router;
