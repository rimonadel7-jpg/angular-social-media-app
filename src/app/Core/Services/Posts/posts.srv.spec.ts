import { TestBed } from '@angular/core/testing';

import { PostsSRV } from './posts.srv';

describe('PostsSRV', () => {
  let service: PostsSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
