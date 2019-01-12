const React = require('react');
const ListItem = require('@material-ui/core/ListItem').default;
const ListItemText = require('@material-ui/core/ListItemText').default;
const Link = require('react-router-dom/Link').default;
const pluralize = require('../../../../lib/utils/plurarize');

const BooksRow = ({ book }) => (
  <ListItem button component={ Link } to={ book._id }>
    <ListItemText
      primary={book.title}
      secondary={pluralize('comentario', book.comments.length) }
    />
  </ListItem>
);

module.exports = BooksRow;