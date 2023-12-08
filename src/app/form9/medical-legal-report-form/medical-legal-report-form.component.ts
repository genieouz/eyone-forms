import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-medical-legal-report-form',
  templateUrl: './medical-legal-report-form.component.html',
  styleUrls: ['./medical-legal-report-form.component.scss']
})
export class MedicalLegalReportFormComponent {
  medicalLegalReportForm: FormGroup;
  practitioners: FormArray;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.medicalLegalReportForm = this.fb.group({
      structure: ['', Validators.required],
      // laboratory: ['', Validators.required],
      // reportNumber: ['', Validators.required],
      personNamed: ['', Validators.required],
      practitioners: this.fb.array([], Validators.required),
      requisitionNumber: ['', Validators.required],
      examinationDate: ['', Validators.required],
      // examinationTime: ['', Validators.required],
      subjectSex: ['', Validators.required],
      externalExamination: [''],
      internalExamination: [''],
      additionalExaminations: [''],
      madeAt: ['', Validators.required],
      date: ['', Validators.required],
    });
    this.practitioners = this.medicalLegalReportForm.get('practitioners') as FormArray;
  }

  addPractitioner(name: string): void {
    if(name) {
      this.practitioners.push(new FormControl(name, Validators.required));
    }
  }

  onSubmit(): void {
    console.log(this.medicalLegalReportForm.value);
    if (this.medicalLegalReportForm.valid) {
      // Logic to handle form submission goes here
      this.formService.submitForm(this.medicalLegalReportForm.value, "");
    }
  }
}
