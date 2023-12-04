import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCounterReferenceFormComponent } from './social-counter-reference-form.component';

describe('SocialCounterReferenceFormComponent', () => {
  let component: SocialCounterReferenceFormComponent;
  let fixture: ComponentFixture<SocialCounterReferenceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialCounterReferenceFormComponent]
    });
    fixture = TestBed.createComponent(SocialCounterReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
