import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomoPathologicalExamFormComponent } from './anatomo-pathological-exam-form.component';

describe('AnatomoPathologicalExamFormComponent', () => {
  let component: AnatomoPathologicalExamFormComponent;
  let fixture: ComponentFixture<AnatomoPathologicalExamFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnatomoPathologicalExamFormComponent]
    });
    fixture = TestBed.createComponent(AnatomoPathologicalExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
