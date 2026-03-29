import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComp } from './comments.comp';

describe('CommentsComp', () => {
  let component: CommentsComp;
  let fixture: ComponentFixture<CommentsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
