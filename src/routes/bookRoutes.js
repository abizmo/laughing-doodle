const express = require('express');
const router = express.Router();

const { bookService } = require('../lib/services');
const catchError = require('../lib/utils/catchError');

router.route('/api/v1/books')
  .get(catchError(async (req, res, next) => {
    const books = await bookService.getAllBooks();
    res.json(books);
  }))
  .post(catchError(async (req, res, next) => {
    const title = req.body.title.toLowerCase();
    const book = await bookService.createOneBook(title);
    res.json(book);
  }))
  .delete(catchError(async (req, res, next) => {
    const response = await bookService.deleteAllBooks();
    res.json({ msg: 'Complete delete succesful' });
  }));

router.route('/api/v1/books/:bookId')
  .get(catchError(async (req, res, next) => {
    const { bookId } = req.params;
    const book = await bookService.getOneBook(bookId);
    if (!book) {
      const error = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(book);
  }))
  .post(catchError(async (req, res, next) => {
    const { bookId } = req.params;
    const { comment } = req.body;
    const book = await bookService.addComment(bookId, comment);
    res.json(book);
  }))
  .delete(catchError(async (req, res, next) => {
    const { bookId } = req.params;
    const book = await bookService.deleteOneBook(bookId);
    res.json({ msg: 'Delete succesful' });
  }));

module.exports = router;