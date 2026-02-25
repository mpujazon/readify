import {Component, input} from '@angular/core';
import {Book} from '../../../types/Book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html'
})
export class BookCard {
  book = input.required<Book>();
}
