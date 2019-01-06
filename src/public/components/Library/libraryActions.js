const { SET_BOOKS } = require('./libraryEvents');

const SetBooks = books => {
  return {
    type: SET_BOOKS,
    books
  };
};

module.exports = {
  SetBooks
};