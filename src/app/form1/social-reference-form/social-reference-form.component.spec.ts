import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialReferenceFormComponent } from './social-reference-form.component';

describe('SocialReferenceFormComponent', () => {
  let component: SocialReferenceFormComponent;
  let fixture: ComponentFixture<SocialReferenceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialReferenceFormComponent]
    });
    fixture = TestBed.createComponent(SocialReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
