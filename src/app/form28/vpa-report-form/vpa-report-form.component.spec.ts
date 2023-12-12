import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpaReportFormComponent } from './vpa-report-form.component';

describe('VpaReportFormComponent', () => {
  let component: VpaReportFormComponent;
  let fixture: ComponentFixture<VpaReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VpaReportFormComponent]
    });
    fixture = TestBed.createComponent(VpaReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
