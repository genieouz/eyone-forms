import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialReference2FormComponent } from './social-reference2-form.component';

describe('SocialReference2FormComponent', () => {
  let component: SocialReference2FormComponent;
  let fixture: ComponentFixture<SocialReference2FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialReference2FormComponent]
    });
    fixture = TestBed.createComponent(SocialReference2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
