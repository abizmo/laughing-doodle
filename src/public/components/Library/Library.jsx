const React = require('react');
const Typography = require('@material-ui/core/Typography').default;
const AddBook = require('./AddBook/AddBook');
const Books = require('./Books/Books');

class Library extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    this.props.SetBooks();
  }

  render () {
    const { books } = this.props;
    const availableBooks = books.length === 1 ? ' libro disponible' : ' libros disponibles';
    return (
      <React.Fragment>
        <Typography component="h1" variant="h6" align="center">
          Actualmente tienes {books.length + availableBooks}
        </Typography>
        <AddBook />
        <Books books={books} />
      </React.Fragment>
    );
  }
}

module.exports = Library;