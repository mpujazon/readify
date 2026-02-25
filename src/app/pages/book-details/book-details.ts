import { Component, inject, input, OnInit, resource, signal } from '@angular/core';
import { BooksService } from '../../services/books-service';

@Component({
  selector: 'app-book-details',
  imports: [],
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
