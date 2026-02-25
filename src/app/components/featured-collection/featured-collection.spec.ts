import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCollection } from './featured-collection';

describe('FeaturedCollection', () => {
  let component: FeaturedCollection;
  let fixture: ComponentFixture<FeaturedCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
