import { Component, signal } from '@angular/core';
import {NavbarComponent} from './layouts/navbar/navbar';
import {RouterOutlet} from '@angular/router';
import {Footer} from './layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('readify');
}
