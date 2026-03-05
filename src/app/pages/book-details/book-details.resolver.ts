import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { BooksService } from '../../services/books-service';
import { Book } from '../../types/Book';

export const bookResolver: ResolveFn<Book> = (route) => {
  const router = inject(Router);
  const booksService = inject(BooksService);

  try {
    return booksService.getBook(route.paramMap.get('id') ?? '');
  } catch {
    return new RedirectCommand(router.parseUrl('/404'));
  }
};
