import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHighlightComponent } from './news-highlight.component';

describe('NewsHighlightComponent', () => {
  let component: NewsHighlightComponent;
  let fixture: ComponentFixture<NewsHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsHighlightComponent]
    });
    fixture = TestBed.createComponent(NewsHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
