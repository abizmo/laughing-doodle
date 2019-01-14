const { connect } = require('react-redux');
const Book = require('./Book');
const { SetBook } = require('./bookActions');
const AddCommentRequest = require('./utils/AddCommentRequest');
const DeleteBooksRequest = require('../Library/utils/DeleteBooksRequest');

const mapStateToProps = (state, { match }) => {
  return {
    bookId: match.params.bookId,
    title: state.book.title,
    comments: state.book.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBook: async (bookId) => {
      try {
        const response = await fetch(`/api/v1/books/${bookId}`);
        const book = await response.json();
        return dispatch(SetBook(book.title, book.comments));
      } catch (error) {
        console.log(error);
      }
    },
    addComment: async (event, bookId) => {
      event.preventDefault();
      const comment = event.target.comment.value;
      const request = AddCommentRequest(comment);
      try {
        let response = await fetch(`/api/v1/books/${bookId}`, request);
        const json = await response.json();
        if (!response.ok) {
          throw new Error(json.error);
        }
        response = await fetch(`/api/v1/books/${bookId}`);
        const book = await response.json();
        return dispatch(SetBook(book.title, book.comments));
      } catch (error) {
        console.log(error)
      }
    },
    deleteBook: async (bookId) => {
      const request = DeleteBooksRequest();
      try {
        let response = await fetch(`/api/v1/books/${bookId}`, request);
        if (!response.ok) {
          const json = await response.json();
          throw new Error(json.error);
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Book);
