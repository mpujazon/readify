import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { BookList } from './pages/book-list/book-list';
import { NotFound } from './pages/not-found/not-found';
import { BookDetails } from './pages/book-details/book-details';
import { bookResolver } from './pages/book-details/book-details.resolver';

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
    path: "book/:id",
    component: BookDetails,
    resolve: {
      book: bookResolver
    }
  },
  {
    path:"404",
    component: NotFound
  },
  {
    path:"**",
    redirectTo: "404"
  }
];
