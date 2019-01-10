const React = require('react');
const Typography = require('@material-ui/core/Typography').default;
const IconButton = require('@material-ui/core/IconButton').default;
const DeleteIcon = require('@material-ui/icons/Delete').default;
const { withStyles } = require('@material-ui/core/styles');
const AddBook = require('./AddBook/AddBookContainer');
const Books = require('./Books/Books');

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 3,
  },
});

class Library extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    this.props.SetBooks();
  }

  render () {
    const { books, classes, DeleteBooks } = this.props;
    const availableBooks = books.length === 1 ? ' libro disponible' : ' libros disponibles';
    return (
      <React.Fragment>
        <Typography component="h1" variant="h6" align="center">
          Actualmente tienes {books.length + availableBooks}
          <span>
            <IconButton onClick={ DeleteBooks } aria-label="Delete" className={classes.margin}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </span>
        </Typography>
        
        <AddBook />
        <Books books={ books }/>
      </React.Fragment>
    );
  }
}

module.exports = withStyles(styles)(Library);