import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/books';

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
  getBook(id: string): Observable<Book | undefined> {
    if (!id) throw new Error('Need to provide a book id.');

    return this.getAllBooks().pipe(
      map((books) => books.find((book) => book.id === id))
    );
  }
}
