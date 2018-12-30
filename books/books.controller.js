const Book = require('./books.model');

const getAll = async (req, res, next) => {
  try {
    const books = await Book.find({})
      .select('title comments');
    const resultBooks = books.map(book => {
      return {
        _id: book._id,
        title: book.title,
        commentcount: book.comments.length || 0
      };
    });
    res.status(200).json(resultBooks);
  } catch (error) {
    next(error);
  }
};

const createNew = async (req, res, next) => {
  const title = req.body.title.toLowerCase();
  try {
    const book = await Book.create({ title });
    res.status(201).json({
      title,
      _id: book._id
    });
  } catch (error) {
    if (error.code === 11000) {
      const error = new Error('El libro ya existe');
      error.status = 500;
      next(error);
    } else next(error);
  }
};

const deleteAll = async (req, res, next) => {
  try {
    const books = await Book.deleteMany({});
    res.status(200).json({ msg: 'complete delete succesful' });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId)
      .select('title comments');
    if (!book) return res.status(404).json({ msg: 'Book not found!' });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const addComment = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId)
      .select('title comments');
    if (!book) return res.status(404).json({ msg: 'Book not found!' });
    const { comment } = req.body;
    book.comments.push({ comment });
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findByIdAndRemove(bookId);
    res.status(200).json({ msg: 'delete succesful'})
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  createNew,
  deleteAll,
  getOne,
  addComment,
  deleteOne
}