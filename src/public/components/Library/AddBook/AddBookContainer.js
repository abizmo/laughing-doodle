const { connect } = require('react-redux');
const AddBook = require('./AddBook');
const { SetBooks } = require('../libraryActions');
const AddBookRequest = require('./utils/AddBookRequest');

const mapStateToProps = state => {
  return null;
};

const mapDispatchToProps = dispatch => {
  return {
    AddBook: async (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const request = AddBookRequest(title);
      try {
        let response = await fetch('/api/v1/books', request);
        const json = await response.json();
        if (!response.ok) {
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddBook);