import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss']
})
export class ReferenceFormComponent implements OnInit {
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
      transferDate: ['', Validators.required],
      transferTime: ['', Validators.required],
      reason: ['', Validators.required],
      constants: this.fb.group({
        bloodPressure: [''],
        heartRate: [''],
        temperature: [''],
        respiratoryRate: [''],
        weight: [''],
        spO2: [''],
        bloodGlucose: [''],
      }),
      examEntry: [''],
      treatmentInstituted: [''],
      transportMeans: [''],
      accompanyingPersonnel: this.fb.group({
        name: [''],
        qualification: ['']
      }),
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
