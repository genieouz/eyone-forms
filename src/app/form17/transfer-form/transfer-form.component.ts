import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent {
  transferForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transferForm = this.fb.group({
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
        capillaryBloodGlucose: [''],
      }),
      examEntry: [''],
      treatmentInstituted: [''],
      transportMode: [''],
      referenceStructure: [''],
    });
  }

  onSubmit(): void {
    console.log(this.transferForm.value);
    if (this.transferForm.valid) {
      // Envoie des données du formulaire, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }
}
