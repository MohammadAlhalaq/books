const nodeFetch = require('node-fetch');
const { render } = require('./../views/helpers');

require('dotenv').config();

const url = process.env.URL;
exports.getBooks = (req, res, next) => {
  const query = encodeURIComponent(req.query['book-name']);
  nodeFetch(`${url}${query}`)
    .then((res1) => res1.json())
    .then((res2) => render(res2.items))
    .then((imageInfo) => res.render('home', { imageInfo }))
    .catch((err) => next(err));
};
