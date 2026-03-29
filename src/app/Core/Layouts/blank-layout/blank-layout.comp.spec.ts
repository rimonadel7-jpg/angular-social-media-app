import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankLayoutComp } from './blank-layout.comp';

describe('BlankLayoutComp', () => {
  let component: BlankLayoutComp;
  let fixture: ComponentFixture<BlankLayoutComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankLayoutComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankLayoutComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
