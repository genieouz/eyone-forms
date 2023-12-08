import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReferenceFormComponent } from './counter-reference-form.component';

describe('CounterReferenceFormComponent', () => {
  let component: CounterReferenceFormComponent;
  let fixture: ComponentFixture<CounterReferenceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterReferenceFormComponent]
    });
    fixture = TestBed.createComponent(CounterReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
