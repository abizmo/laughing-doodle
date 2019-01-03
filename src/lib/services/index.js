const BookService = require('./bookService/bookService');
const BookModel = require('./bookService/bookModel');

const bookService = new BookService(BookModel);

module.exports = {
  bookService
};