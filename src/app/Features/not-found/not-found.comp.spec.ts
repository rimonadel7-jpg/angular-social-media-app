import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComp } from './not-found.comp';

describe('NotFoundComp', () => {
  let component: NotFoundComp;
  let fixture: ComponentFixture<NotFoundComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
