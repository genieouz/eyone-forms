import { TestBed } from '@angular/core/testing';

import { SocialCareService } from './social-care.service';

describe('SocialCareService', () => {
  let service: SocialCareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialCareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
