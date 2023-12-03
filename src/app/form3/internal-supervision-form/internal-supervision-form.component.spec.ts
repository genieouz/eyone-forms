import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSupervisionFormComponent } from './internal-supervision-form.component';

describe('InternalSupervisionFormComponent', () => {
  let component: InternalSupervisionFormComponent;
  let fixture: ComponentFixture<InternalSupervisionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalSupervisionFormComponent]
    });
    fixture = TestBed.createComponent(InternalSupervisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
