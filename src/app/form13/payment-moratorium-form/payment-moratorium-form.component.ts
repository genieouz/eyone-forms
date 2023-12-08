import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-moratorium-form',
  templateUrl: './payment-moratorium-form.component.html',
  // styleUrls: ['./payment-moratorium-form.component.css'] // Si vous avez un fichier CSS associé
})
export class PaymentMoratoriumFormComponent implements OnInit {
  paymentMoratoriumForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paymentMoratoriumForm = this.fb.group({
      structure: ['', Validators.required],
      title: ['', Validators.required],
      fullName: ['', Validators.required],
      ncni: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      invoiceNumber: ['', Validators.required],
      admissionDate: ['', Validators.required],
      niup: ['', Validators.required],
      serviceUnit: ['', Validators.required],
      paymentPeriodicity: ['', Validators.required],
      paymentAmount: ['', Validators.required],
      refundStartDate: ['', Validators.required],
      beneficiary: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.paymentMoratoriumForm.value);
    if (this.paymentMoratoriumForm.valid) {
      // Ici vous
    }
  }
}
