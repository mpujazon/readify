import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetails } from './book-details';
import { Book } from '../../types/Book';

describe('BookDetails', () => {
  let component: BookDetails;
  let fixture: ComponentFixture<BookDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetails);
    const mockBook: Book = {
      id: '1',
      title: 'Test Title',
      author: 'Test Author',
      category: 'Test Category',
      featured: false
    };
    fixture.componentRef.setInput('book', mockBook);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
