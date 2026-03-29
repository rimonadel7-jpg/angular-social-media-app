import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComp } from './notifications.comp';

describe('NotificationsComp', () => {
  let component: NotificationsComp;
  let fixture: ComponentFixture<NotificationsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
