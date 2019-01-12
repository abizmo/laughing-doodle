const { SET_BOOK } = require('./bookEvents');

const initialState = {
  title: "",
  comments: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK:
      return { ...action.book };
    default:
      return state;
  }
};

module.exports = bookReducer;