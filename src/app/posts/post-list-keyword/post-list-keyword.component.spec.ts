import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListKeywordComponent } from './post-list-keyword.component';

describe('PostListKeywordComponent', () => {
  let component: PostListKeywordComponent;
  let fixture: ComponentFixture<PostListKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
