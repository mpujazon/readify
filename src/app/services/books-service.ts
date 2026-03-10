import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from '../types/Book';
import {books} from '../data/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/books';

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }
  getBook(id: string){
    if(!id) throw new Error('Need to provide a book id.')

    const book = books.find(book=> book.id === id);
    if(!book) throw new Error(`There is no books with  id ${id}`);

    return book;
  }
}
