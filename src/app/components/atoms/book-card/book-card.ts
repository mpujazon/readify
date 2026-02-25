import {Component, inject, input} from '@angular/core';
import {Book} from '../../../types/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html'
})
export class BookCard {
  private router = inject(Router);
  book = input.required<Book>();

  viewBookDetails(){
    this.router.navigate([`book/${this.book().id}`]);
  }
}
