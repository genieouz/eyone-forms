import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vpa-request-form',
  templateUrl: './vpa-request-form.component.html',
  styleUrls: ['./vpa-request-form.component.scss']
})
export class VpaRequestFormComponent implements OnInit {
  vpaRequestForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vpaRequestForm = this.fb.group({
      structure: ['', Validators.required],
      fileNumber: [''],
      niup: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      maidenName: [''],
      birthdate: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      sex: ['', Validators.required],
      allergies: [''],
      diagnosis: ['', Validators.required],
      surgicalIndication: [''],
      interventionType: [''],
      observations: ['']
    });
  }

  onSubmit(): void {
    console.log('Form Submitted', this.vpaRequestForm.value);
    if (this.vpaRequestForm.valid) {
      // Logic to handle form submission goes here
    } else {
      // Handle form errors
      console.error('Form is not valid');
    }
  }
}
