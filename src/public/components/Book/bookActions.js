const { SET_BOOK } = require('./bookEvents');

const SetBook = (title, comments) => {
  return {
    type: SET_BOOK,
    book: {
      title,
      comments
    }
  };
};

module.exports.SetBook = SetBook;