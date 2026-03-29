import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComp } from './create-post.comp';

describe('CreatePostComp', () => {
  let component: CreatePostComp;
  let fixture: ComponentFixture<CreatePostComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
