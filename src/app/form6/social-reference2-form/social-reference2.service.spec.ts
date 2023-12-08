import { TestBed } from '@angular/core/testing';

import { SocialReference2Service } from './social-reference2.service';

describe('SocialReference2Service', () => {
  let service: SocialReference2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialReference2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
