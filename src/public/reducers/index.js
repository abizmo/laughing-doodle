const { combineReducers } = require('redux');
const libraryReducer = require('../components/Library/libraryReducer');
const bookReducer = require('../components/Book/bookReducer');

module.exports = combineReducers({
  library: libraryReducer,
  book: bookReducer
});
