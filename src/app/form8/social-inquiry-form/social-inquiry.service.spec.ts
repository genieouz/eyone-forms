import { TestBed } from '@angular/core/testing';

import { SocialInquiryService } from './social-inquiry.service';

describe('SocialInquiryService', () => {
  let service: SocialInquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialInquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
