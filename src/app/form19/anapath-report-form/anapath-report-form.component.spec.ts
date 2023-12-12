import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnapathReportFormComponent } from './anapath-report-form.component';

describe('AnapathReportFormComponent', () => {
  let component: AnapathReportFormComponent;
  let fixture: ComponentFixture<AnapathReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnapathReportFormComponent]
    });
    fixture = TestBed.createComponent(AnapathReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
