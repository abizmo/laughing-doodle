const React = require('react');
const Typography = require('@material-ui/core/Typography').default;
const AddBook = require('./AddBook/AddBook');
const Books = require('./Books/Books');

const books = [
  {
    title: 'Hansel y Gretel',
    _id: '1',
    comments: [
      "Mola mucho",
      "Un poco amargo"
    ]
  },
]
const Library = () => {
  const availableBooks = books.length === 1 ? ' libro disponible' : ' libros disponibles';
  return (
    <React.Fragment>
      <Typography component="h1" variant="h6" align="center">
        Actualmente tienes { books.length + availableBooks}
      </Typography>
      <AddBook />
      <Books books={ books }/>
    </React.Fragment>
  );
}

module.exports = Library;