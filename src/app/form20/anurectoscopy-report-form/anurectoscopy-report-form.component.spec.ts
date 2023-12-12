import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnurectoscopyReportFormComponent } from './anurectoscopy-report-form.component';

describe('AnurectoscopyReportFormComponent', () => {
  let component: AnurectoscopyReportFormComponent;
  let fixture: ComponentFixture<AnurectoscopyReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnurectoscopyReportFormComponent]
    });
    fixture = TestBed.createComponent(AnurectoscopyReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
