import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCareFormComponent } from './social-care-form.component';

describe('SocialCareFormComponent', () => {
  let component: SocialCareFormComponent;
  let fixture: ComponentFixture<SocialCareFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialCareFormComponent]
    });
    fixture = TestBed.createComponent(SocialCareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
