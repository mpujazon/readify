import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { BookList } from './pages/book-list/book-list';

export const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "library",
    component: BookList
  }
];
