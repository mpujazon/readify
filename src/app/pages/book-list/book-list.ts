import { Component, inject } from '@angular/core';
import { BooksService } from '../../services/books-service';
import { BookCard } from "../../components/atoms/book-card/book-card";

@Component({
  selector: 'app-book-list',
  imports: [BookCard],
  templateUrl: './book-list.html'
})

export class BookList {
  booksService = inject(BooksService);
  books = this.booksService.getAllBooks();
}
