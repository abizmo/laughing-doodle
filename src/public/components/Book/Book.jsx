const React = require('react');
const Typography = require('@material-ui/core/Typography').default;
const List = require('@material-ui/core/List').default;
const ListItem = require('@material-ui/core/ListItem').default;
const ListItemText = require('@material-ui/core/ListItemText').default;
const ListItemIcon = require('@material-ui/core/ListItemIcon').default;
const CommentIcon = require('@material-ui/icons/Comment').default;
const AddComment = require('./AddComment/AddComment');
const pluralize = require('../../../lib/utils/plurarize');

class Book extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const bookId = this.props.bookId;
    this.props.setBook(bookId);
  }

  render () {
    const { bookId, title, comments } = this.props;
    return (
      <React.Fragment>
        <Typography component="h2" variant="h4" align="center">
          { title }
        </Typography>
        <Typography component="h3" variant="h6">
          { pluralize('Comentario', comments.length) }
        </Typography>
        <List>
          { 
            comments.map(comment => (
              <ListItem key={ comment }>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary={ comment } />
              </ListItem>
            )) 
          }
        </List>
        <AddComment bookId={ bookId } addComment={ this.props.addComment }/>
      </React.Fragment>
    );
  }
}

module.exports = Book;