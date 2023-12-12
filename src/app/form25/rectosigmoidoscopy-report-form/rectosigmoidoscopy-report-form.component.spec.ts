import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectosigmoidoscopyReportFormComponent } from './rectosigmoidoscopy-report-form.component';

describe('RectosigmoidoscopyReportFormComponent', () => {
  let component: RectosigmoidoscopyReportFormComponent;
  let fixture: ComponentFixture<RectosigmoidoscopyReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectosigmoidoscopyReportFormComponent]
    });
    fixture = TestBed.createComponent(RectosigmoidoscopyReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
