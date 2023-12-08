import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanistCardFormComponent } from './accompanist-card-form.component';

describe('AccompanistCardFormComponent', () => {
  let component: AccompanistCardFormComponent;
  let fixture: ComponentFixture<AccompanistCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccompanistCardFormComponent]
    });
    fixture = TestBed.createComponent(AccompanistCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
