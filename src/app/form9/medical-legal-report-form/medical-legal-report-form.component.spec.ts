import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLegalReportFormComponent } from './medical-legal-report-form.component';

describe('MedicalLegalReportFormComponent', () => {
  let component: MedicalLegalReportFormComponent;
  let fixture: ComponentFixture<MedicalLegalReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalLegalReportFormComponent]
    });
    fixture = TestBed.createComponent(MedicalLegalReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
