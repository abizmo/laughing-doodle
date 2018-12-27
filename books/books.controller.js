const Book = require('./books.model');

const getAll = async (req, res) => {
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
    console.error(error);
    res.status(500).json({ error: 'Error del servidor'});
  }
};

const createNew = async (req, res) => {
  const title = req.body.title.toLowerCase();
  try {
    const book = await Book.create({ title });
    res.status(201).json({
      title,
      _id: book._id
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000)
      return res.status(409).json({ error: 'El libro ya existe.'});
    res.status(500).json({ error: 'Error del servidor' });
  }
};

const deleteAll = async (req, res) => {
  try {
    const books = await Book.deleteMany({});
    res.status(200).json({ msg: 'complete delete succesful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

const getOne = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId)
      .select('title comments');
    if (!book) return res.status(404).json({ msg: 'Book not found!' });
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

const addComment = async (req, res) => {
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
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

const deleteOne = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findByIdAndRemove(bookId);
    res.status(200).json({ msg: 'delete succesful'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
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