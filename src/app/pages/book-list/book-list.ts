import { Component, inject } from '@angular/core';
import { BooksService } from '../../services/books-service';
import { BookCard } from "../../components/atoms/book-card/book-card";
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [BookCard, AsyncPipe],
  templateUrl: './book-list.html'
})

export class BookList {
  booksService = inject(BooksService);
  books$ = this.booksService.getAllBooks();
}
