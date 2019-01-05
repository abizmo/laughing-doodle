const React = require('react');
const List = require('@material-ui/core/List').default;
const { withStyles } = require('@material-ui/core/styles');
const Book = require('./Book');

const styles = theme => ({
  list: {
    width: '70%',
    margin: 'auto'
  }
})
const Books = ({ books, classes }) => (
  <List className={ classes.list }>
    { books && books.map(book => <Book key={ book._id } book={ book } />)}
  </List>
);

module.exports = withStyles(styles)(Books);