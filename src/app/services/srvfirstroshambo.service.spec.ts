import { TestBed } from '@angular/core/testing';

import { SrvfirstroshamboService } from './srvfirstroshambo.service';

describe('SrvfirstroshamboService', () => {
  let service: SrvfirstroshamboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvfirstroshamboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
