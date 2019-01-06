const { combineReducers } = require('redux');
const libraryReducer = require('../components/Library/libraryReducer');

module.exports = combineReducers({
  library: libraryReducer
});