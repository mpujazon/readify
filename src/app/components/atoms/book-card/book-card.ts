import {Component, inject, input} from '@angular/core';
import {Book} from '../../../types/Book';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [
    RouterLink
  ],
  templateUrl: './book-card.html'
})
export class BookCard {
  book = input.required<Book>();
}
