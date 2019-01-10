const { connect } = require('react-redux');
const Library = require('./Library');
const { SetBooks } = require('./libraryActions');
const DeleteBooksRequest = require('./utils/DeleteBooksRequest');

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
    },
    DeleteBooks: async () => {
      const request = DeleteBooksRequest();
      try {
        let response = await fetch('/api/v1/books', request);
        if (!response.ok) {
          const json = await response.json();
          throw new Error(json.error);
        }
        response = await fetch('/api/v1/books');
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