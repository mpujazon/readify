import { Component, signal } from '@angular/core';
import {NavbarComponent} from './layouts/navbar/navbar';
import {HomePage} from './pages/home-page/home-page';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('readify');
}
