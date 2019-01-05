const React = require('react');
const ListItem = require('@material-ui/core/ListItem').default;
const ListItemText = require('@material-ui/core/ListItemText').default;
const Link = require('react-router-dom/Link').default;

const Book = ({ book }) => (
  <ListItem button component={ Link } to={ book._id }>
    <ListItemText
      primary={book.title}
      secondary={`${book.comments.length} comentarios`}
    />
  </ListItem>
);

module.exports = Book;