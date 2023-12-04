import { TestBed } from '@angular/core/testing';

import { SocialCounterReferenceService } from './social-counter-reference.service';

describe('SocialCounterReferenceService', () => {
  let service: SocialCounterReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialCounterReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
