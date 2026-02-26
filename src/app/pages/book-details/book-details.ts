import { Component, inject, input, OnInit, resource, signal } from '@angular/core';
import { BooksService } from '../../services/books-service';
import {Button} from '../../components/atoms/button/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './book-details.html'
})
export class BookDetails {
  private booksService = inject(BooksService);
  id = input.required<string>();

  bookResource = resource({
    params: () => this.id(),
    loader: ({params: id}) => Promise.resolve(this.booksService.getBook(id))
  });
}
