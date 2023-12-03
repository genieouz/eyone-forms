import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalNoteFormComponent } from './technical-note-form.component';

describe('TechnicalNoteFormComponent', () => {
  let component: TechnicalNoteFormComponent;
  let fixture: ComponentFixture<TechnicalNoteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalNoteFormComponent]
    });
    fixture = TestBed.createComponent(TechnicalNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
