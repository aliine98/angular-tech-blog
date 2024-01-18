import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedArticlesComponent } from './searched-articles.component';

describe('SearchedArticlesComponent', () => {
  let component: SearchedArticlesComponent;
  let fixture: ComponentFixture<SearchedArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedArticlesComponent]
    });
    fixture = TestBed.createComponent(SearchedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
