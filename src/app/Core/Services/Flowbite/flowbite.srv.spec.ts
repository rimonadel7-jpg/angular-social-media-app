import { TestBed } from '@angular/core/testing';

import { FlowbiteSRV } from './flowbite.srv';

describe('FlowbiteSRV', () => {
  let service: FlowbiteSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowbiteSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
