const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');

mongoose.connect('mongodb://localhost:27017/laughing-doodle', {
  useNewUrlParser: true 
} , (err) => {
  if (err) console.error(err);
  else {
    const app = express();

    app.use(helmet({
      noCache: true,
      hidePoweredBy: {
        setTo: "PHP 4.2.0"
      }
    }))
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, 'views'));

    app.use('/api', require('./routes'));

    app.get('/', (req, res) => res.status(200).render('index', { msg: 'Hello!'}));

    app.use((req, res, next) => {
      const err = new Error('Page not found');
      err.status = 404;
      next(err);
    });

    app.use((err, req, res, next) => {
      console.log(err);
      res.render('error', { 
        status: err.status || 500, 
        error: err.message 
      });
    });

    app.listen(3000, () => console.log('listening...'));
  }
});

