const nodeFetch = require('node-fetch');
require('dotenv').config();
const { render } = require('./../views/helpers');

const characters = 'abcdefghijklmnopqrstuvwxyz';

const url = process.env.URL;
exports.get = (req, res, next) => {
  const random = Math.floor(Math.random() * characters.length);
  const char = characters[random];
  nodeFetch(`${url}${char}`)
    .then((res1) => res1.json())
    .then((res3) => render(res3.items))
    .then((imageInfo) => res.render('home', { imageInfo }))
    .catch((err) => next(err));
};
