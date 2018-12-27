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
    app.set('views', path.join(__dirname, 'views'));

    app.use('/api', require('./routes'));

    app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'views', 'index.html')));

    app.use((req, res, next) => res.status(404).sendFile(path.join(__dirname, 'views', '404.html')));

    app.listen(3000, () => console.log('listening...'));
  }
});

