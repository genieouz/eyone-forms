import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementFormComponent } from './engagement-form.component';

describe('EngagementFormComponent', () => {
  let component: EngagementFormComponent;
  let fixture: ComponentFixture<EngagementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementFormComponent]
    });
    fixture = TestBed.createComponent(EngagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
