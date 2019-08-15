const express = require('express');
const compression = require('compression');
const { join } = require('path');
const exphbs = require('express-handlebars');

const controller = require('./controller');
const helpers = require('./views/helpers');
const app = express();

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
    extname: 'hbs',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    partialsDir: join(__dirname, 'views', 'partials'),
    helpers,
}))

app.disable('x-powered-by');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 3012);

app.use(controller);

module.exports = app;