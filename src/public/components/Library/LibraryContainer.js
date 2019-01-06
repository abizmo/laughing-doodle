const { connect } = require('react-redux');
const Library = require('./Library');
const { SetBooks } = require('./libraryActions');

const mapStateToProps = state => {
  return {
    books: state.library
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SetBooks: async () => {
      try {
        const response = await fetch('/api/v1/books');
        const books = await response.json();
        return dispatch(SetBooks(books));
      }
      catch (error) {
        console.log(error);
      }
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Library);