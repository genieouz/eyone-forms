import { TestBed } from '@angular/core/testing';

import { SocialReferenceService } from './social-reference.service';

describe('SocialReferenceService', () => {
  let service: SocialReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
