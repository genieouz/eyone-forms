import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInquiryFormComponent } from './social-inquiry-form.component';

describe('SocialInquiryFormComponent', () => {
  let component: SocialInquiryFormComponent;
  let fixture: ComponentFixture<SocialInquiryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialInquiryFormComponent]
    });
    fixture = TestBed.createComponent(SocialInquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
