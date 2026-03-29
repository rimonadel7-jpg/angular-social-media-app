import { TestBed } from '@angular/core/testing';

import { AuthSRV } from './auth.srv';

describe('AuthSRV', () => {
  let service: AuthSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
