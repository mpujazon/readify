import { Injectable } from '@angular/core';
import {Book} from '../types/Book';
import {books} from '../data/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getAllBooks(): Book[]{
    return books;
  }
  getBook(id: string){
    if(!id) throw new Error('Need to provide a book id.')

    const book = books.find(book=> book.id === id);
    if(!book) throw new Error(`There is no books with  id ${id}`);

    return book;
  }
}
