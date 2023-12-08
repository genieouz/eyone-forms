import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-reference-form',
  templateUrl: './counter-reference-form.component.html',
  styleUrls: ['./counter-reference-form.component.scss']
})
export class CounterReferenceFormComponent {
  referenceForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.referenceForm = this.fb.group({
      structure: ['', Validators.required],
      niup: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      admissionDate: ['', Validators.required],
      admissionTime: ['', Validators.required],
      reason: ['', Validators.required],
      medicalRecordSummary: [''],
      treatmentInstituted: [''],
      observations: [''],
      exitDate: [''],
      exitTime: ['']
    });
  }

  onSubmit(): void {
    console.log(this.referenceForm.value);
    if (this.referenceForm.valid) {
      // Envoie des données du formulaire, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }
}
