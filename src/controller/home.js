const nodeFetch = require('node-fetch');
const { render } = require('./../views/helpers');

const characters = 'abcdefghijklmnopqrstuvwxyz';

exports.get = (req, res, next) => {
  const random = Math.floor(Math.random() * characters.length);
  const char = characters[random];
  nodeFetch(`https://www.googleapis.com/books/v1/volumes?q=${char}`)
    .then((res1) => res1.json())
    .then((res3) => render(res3.items))
    .then((imageInfo) => res.render('home', { imageInfo }))
    .catch((err) => next(err));
};
