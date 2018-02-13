'use strict';

const uuid = require('uuid/v1');

class Book {
  constructor(options){
    this.id = uuid();
    this.title = options.title || '';
    this.author = options.author || '';
    this.synopsis = options.synopsis || '';
  }

  toString(){
    return this.title + '\n' + this.author + '\n' + this.synopsis;
  }
}

module.exports = Book;