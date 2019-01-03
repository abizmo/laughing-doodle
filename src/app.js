const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const { bookRoutes } = require('./routes');

const app = express();

app.use(helmet({
  noCache: true,
  hidePoweredBy: {
    setTo: "PHP 4.2.0"
  }
}));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', [ bookRoutes ]);

app.get('/', (req, res) => res.status(200).render('index', { msg: 'Hello!' }));

app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.statusCode || 500)
    .json({ error: err.message });
});

module.exports = app;