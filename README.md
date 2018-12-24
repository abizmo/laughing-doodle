# [freeCodeCamp.org] ISQA Project - Personal Library

## User stories:
1. Nothing from my website will be cached in my client as a security measure.
2. I will see that the site is powered by 'PHP 4.2.0' even though it isn't as a security measure.
3. I can post a title to /api/books to add a book and returned will be the object with the title and a unique _id.
4. I can get /api/books to retrieve an aray of all books containing title, _id, & commentcount.
5. I can get /api/books/{_id} to retrieve a single object of a book containing title, _id, & an array of comments (empty array if no comments present).
6. I can post a comment to /api/books/{_id} to add a comment to a book and returned will be the books object similar to get /api/books/{_id}.
7. I can delete /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.
8. If I try to request a book that doesn't exist I will get a 'no book exists' message.
9. I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.
10. All 6 functional tests requiered are complete and passing.

## Routes:
- /api/books:
  - get: list all books
  - post: create new book
  - delete: delete all books
- /api/books/1234:
  - get: show book 1234
  - post: add comment to 1234
  - delete: delete 1234
### Test API responses:
Test post to /api/books
Book Title:


Test post to /api/books/{bookid}
BookId to comment on:


Comment:


Sample Front-End:

New Book Title
  Submit New Book!
My test book - 2 comments
My test book - 0 comments
My test book - 3 comments
My test book - 0 comments
The Great Gatsby - 0 comments
My test book - 0 comments
My test book - 0 comments
weddings - 3 comments
My test book - 0 comments
My test book - 0 comments
My test book - 0 comments
My test book - 3 comments
My test book - 1 comments
My test book - 0 comments
My test book - 0 comments
...and 12 more!

Select a book to see it's details and comments

Delete all books...
