import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoutComp } from './auth-layout.comp';

describe('AuthLayoutComp', () => {
  let component: AuthLayoutComp;
  let fixture: ComponentFixture<AuthLayoutComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoutComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayoutComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
