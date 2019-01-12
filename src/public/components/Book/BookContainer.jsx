const { connect } = require('react-redux');
const Book = require('./Book');

const mapStateToProps = (state, { match }) => {
  return {
    bookId: match.params.bookId
  };
};

const mapDispatchToProps = (dispath) => {
  return {};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Book);