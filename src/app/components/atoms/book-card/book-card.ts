import {Component, input} from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html'
})
export class BookCard {
  coverUrl = input<string>();
  title = input.required<string>();
  author = input.required<string>();
}
