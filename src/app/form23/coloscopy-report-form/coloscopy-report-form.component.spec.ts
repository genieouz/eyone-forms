import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoscopyReportFormComponent } from './coloscopy-report-form.component';

describe('ColoscopyReportFormComponent', () => {
  let component: ColoscopyReportFormComponent;
  let fixture: ComponentFixture<ColoscopyReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoscopyReportFormComponent]
    });
    fixture = TestBed.createComponent(ColoscopyReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
