class BookService {
  constructor (Model) {
    this.Model = Model;
    this.addComment = this.addComment.bind(this);
    this.createOneBook = this.createOneBook.bind(this);
    this.deleteAllBooks = this.deleteAllBooks.bind(this);
    this.deleteOneBook = this.deleteOneBook.bind(this);
    this.getAllBooks = this.getAllBooks.bind(this);
    this.getOneBook = this.getOneBook.bind(this);
  }

  async addComment (bookId, comment) {
    const book = await this.Model.findById(bookId);
    book.comments.push(comment);
    return book.save();
  }
  createOneBook (title) {
    return new this.Model({ title })
      .save();
  }

  deleteAllBooks () {
    return this.Model.deleteMany({});
  }

  deleteOneBook (bookId) {
    return this.Model.findByIdAndRemove(bookId);
  }

  getAllBooks () {
    return this.Model.find({})
      .select('title comments');
  }

  getOneBook (bookId) {
    return this.Model.findById(bookId)
      .select('title comments');
  }
}

module.exports = BookService;