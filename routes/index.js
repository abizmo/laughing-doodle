const express = require('express');
const router = express.Router();
const booksController = require('../books/books.controller');

router.route('/books')
  .get(booksController.getAll)
  .post(booksController.createNew)
  .delete(booksController.deleteAll);

router.route('/books/:bookId')
  .get(booksController.getOne)
  .post(booksController.addComment)
  .delete(booksController.deleteOne);

module.exports = router;