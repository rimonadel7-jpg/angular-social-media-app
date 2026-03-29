import { TestBed } from '@angular/core/testing';

import { ProfileSRV } from './profile.srv';

describe('ProfileSRV', () => {
  let service: ProfileSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
