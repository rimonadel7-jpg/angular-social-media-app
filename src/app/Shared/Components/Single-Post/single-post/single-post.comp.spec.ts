import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostComp } from './single-post.comp';

describe('SinglePostComp', () => {
  let component: SinglePostComp;
  let fixture: ComponentFixture<SinglePostComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePostComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePostComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
