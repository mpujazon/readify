import { Injectable } from '@angular/core';
import {Book} from '../types/Book';
import {books} from '../config/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getAllBooks(): Book[]{
    return books;
  }
}
