import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeReportFormComponent } from './operative-report-form.component';

describe('OperativeReportFormComponent', () => {
  let component: OperativeReportFormComponent;
  let fixture: ComponentFixture<OperativeReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperativeReportFormComponent]
    });
    fixture = TestBed.createComponent(OperativeReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
