require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true 
} , (err) => {
  if (err) {
    console.error(err);
  }
  else {
    app.listen(3000, () => console.log('listening...'));
  }
});

