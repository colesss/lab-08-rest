'use strict';

const Book = require('../model/book.js');
const router = require('../lib/router.js');
const storage = require('../lib/storage.js');

// store data while the server is running
let books = [];

let sendStatus = (res, status, message) => {
  console.error('__REQUESTS_ERROR__', message);
  res.writeHead(status);
  res.end();
};

let sendJSON = (res, status, data) => {
  res.writeHead(status, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(data));
};

router.post('/api/books', (req, res) => {
  if(!req.body)
    return sendStatus(res, 400, 'No body found');
  if(!req.body.title)
    return sendStatus(res, 400, 'No title found');
  if(!req.body.author)
    return sendStatus(res, 400, 'No author found');
  if(!req.body.synopsis)
    return sendStatus(res, 400, 'No synopsis found');

  let book = new Book(req.body);
  books.push(book);
  sendJSON(res, 200, book);
});

router.get('/api/books', (req, res) => {
  if(req.url.query.id) {
    let databaseQuery = books.find(Book => Book.id === req.url.query.id);
    return databaseQuery ? sendJSON(res, 200, databaseQuery) : sendStatus(res, 200, 'No books were found that matches that search');
  }
  return sendJSON(res, 200, books);
});

router.delete('/api/books', (req, res) => {
  if(req.url.query) {
    let databaseQuery = books.find(Book => Book.id === req.url.query.id);
    books.splice(books.indexOf(databaseQuery), 1);
    return databaseQuery ? sendStatus(res, 204, 'Book Deleted') : sendStatus(res, 204, 'No books were found that matches that search');
  }
  return sendStatus(res, 400, 'No books were found');
});