import { Component, signal } from '@angular/core';
import {NavbarComponent} from './layouts/navbar/navbar';
import {HomePage} from './pages/home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomePage
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('readify');
}
