import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingThemeSheetFormComponent } from './training-theme-sheet-form.component';

describe('TrainingThemeSheetFormComponent', () => {
  let component: TrainingThemeSheetFormComponent;
  let fixture: ComponentFixture<TrainingThemeSheetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingThemeSheetFormComponent]
    });
    fixture = TestBed.createComponent(TrainingThemeSheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
