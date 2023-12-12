import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpaRequestFormComponent } from './vpa-request-form.component';

describe('VpaRequestFormComponent', () => {
  let component: VpaRequestFormComponent;
  let fixture: ComponentFixture<VpaRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VpaRequestFormComponent]
    });
    fixture = TestBed.createComponent(VpaRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
