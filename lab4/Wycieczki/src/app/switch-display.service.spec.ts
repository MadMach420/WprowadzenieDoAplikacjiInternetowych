import { TestBed } from '@angular/core/testing';

import { SwitchDisplayService } from './switch-display.service';

describe('SwitchDisplayService', () => {
  let service: SwitchDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
