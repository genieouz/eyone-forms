import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anatomo-pathological-exam-form',
  templateUrl: './anatomo-pathological-exam-form.component.html',
  styleUrls: ['./anatomo-pathological-exam-form.component.scss']
})
export class AnatomoPathologicalExamFormComponent implements OnInit {
  anatomoPathologicalExamForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.anatomoPathologicalExamForm = this.fb.group({
      structure: ['', Validators.required],
      samplingDate: ['', Validators.required],
      receptionDate: ['', Validators.required],
      requestingDoctor: ['', Validators.required],
      service: ['', Validators.required],
      niup: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      profession: ['', Validators.required],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
      ethnicity: [''],
      currentAddress: ['', Validators.required],
      permanentAddress: [''],
      sampledOrgan: ['', Validators.required],
      samplingType: ['', Validators.required],
      operativeDescription: [''],
      clinicalSummary: [''],

    });
  }

  get sampledOrgans(): FormArray {
    return this.anatomoPathologicalExamForm.get('sampledOrgans') as FormArray;
  }

  addSampledOrgan(): void {
    this.sampledOrgans.push(this.fb.control(''));
  }

  removeSampledOrgan(index: number): void {
    this.sampledOrgans.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.anatomoPathologicalExamForm.value);
    if (this.anatomoPathologicalExamForm.valid) {
      // Envoyez les données du formulaire ici, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }

  // ...ajoutez des méthodes supplémentaires si nécessaire...
}
