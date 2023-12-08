import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMoratoriumFormComponent } from './payment-moratorium-form.component';

describe('PaymentMoratoriumFormComponent', () => {
  let component: PaymentMoratoriumFormComponent;
  let fixture: ComponentFixture<PaymentMoratoriumFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMoratoriumFormComponent]
    });
    fixture = TestBed.createComponent(PaymentMoratoriumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
