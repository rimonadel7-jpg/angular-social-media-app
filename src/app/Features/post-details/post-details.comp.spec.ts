import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComp } from './post-details.comp';

describe('PostDetailsComp', () => {
  let component: PostDetailsComp;
  let fixture: ComponentFixture<PostDetailsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailsComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailsComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
