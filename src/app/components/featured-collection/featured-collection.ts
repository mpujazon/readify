import {Component, inject} from '@angular/core';
import {BooksService} from '../../services/books-service';
import {BookCard} from '../atoms/book-card/book-card';
import { RouterLink } from "@angular/router";
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-featured-collection',
  imports: [
    BookCard,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './featured-collection.html'
})
export class FeaturedCollection {
  booksService = inject(BooksService);

  books$ = this.booksService.getAllBooks();
}
