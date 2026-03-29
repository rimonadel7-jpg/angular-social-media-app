import { TestBed } from '@angular/core/testing';

import { CommentsSRV } from './comments.srv';

describe('CommentsSRV', () => {
  let service: CommentsSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
