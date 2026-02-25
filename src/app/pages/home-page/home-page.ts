import { Component } from '@angular/core';
import {Button} from '../../components/atoms/button/button';
import {BookCard} from '../../components/atoms/book-card/book-card';

@Component({
  selector: 'app-home-page',
  imports: [
    Button,
    BookCard
  ],
  templateUrl: './home-page.html',
})
export class HomePage {

}
