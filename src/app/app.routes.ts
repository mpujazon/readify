import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { BookList } from './pages/book-list/book-list';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "library",
    component: BookList
  },
  {
    path: "book/**",
    component: NotFound
  },
  {
    path:"**",
    redirectTo: ""
  }
];
