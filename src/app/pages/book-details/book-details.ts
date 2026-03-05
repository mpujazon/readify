import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/atoms/button/button';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button, RouterLink],
  templateUrl: './book-details.html'
})
export class BookDetails {
  book = input.required<Book>();
}
