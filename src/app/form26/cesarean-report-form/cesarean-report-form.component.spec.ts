import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesareanReportFormComponent } from './cesarean-report-form.component';

describe('CesareanReportFormComponent', () => {
  let component: CesareanReportFormComponent;
  let fixture: ComponentFixture<CesareanReportFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CesareanReportFormComponent]
    });
    fixture = TestBed.createComponent(CesareanReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
