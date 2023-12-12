import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OesoGastroDuodenoscopyReportFormComponent } from './oeso-gastro-duodenoscopy-report-form.component';

describe('OesoGastroDuodenoscopyReportFormComponent', () => {
  let component: OesoGastroDuodenoscopyReportFormComponent;
  let fixture: ComponentFixture<OesoGastroDuodenoscopyReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OesoGastroDuodenoscopyReportFormComponent]
    });
    fixture = TestBed.createComponent(OesoGastroDuodenoscopyReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
