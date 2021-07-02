import { TestBed } from '@angular/core/testing';

import { InstructionsServiceService } from './instructions-service.service';

describe('InstructionsServiceService', () => {
  let service: InstructionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
