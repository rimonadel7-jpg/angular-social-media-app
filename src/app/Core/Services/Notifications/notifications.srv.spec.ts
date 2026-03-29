import { TestBed } from '@angular/core/testing';

import { NotificationsSRV } from './notifications.srv';

describe('NotificationsSRV', () => {
  let service: NotificationsSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
