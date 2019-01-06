const init = [];
const { SET_BOOKS } = require('./libraryEvents');

const libraryReducer = (state = init, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.books;
    default:
      return state;
  }
};

module.exports = libraryReducer;