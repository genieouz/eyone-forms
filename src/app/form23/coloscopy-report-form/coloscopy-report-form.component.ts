import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coloscopy-report-form',
  templateUrl: './coloscopy-report-form.component.html',
  styleUrls: ['./coloscopy-report-form.component.scss']
})
export class ColoscopyReportFormComponent implements OnInit {
  coloscopyReportForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.coloscopyReportForm = this.fb.group({
      structure: ['', Validators.required],
      indication: [''],
      preparation: [''],
      tolerance: [''],
      inspection: [''],
      rectalExam: [''],
      coloscopy: [''],
      gestures: [''],
      conclusion: [''],
      recommendations: ['']
    });
  }

  onSubmit(): void {
    console.log(this.coloscopyReportForm.value);
    if (this.coloscopyReportForm.valid) {
      // Process form submission, e.g., send data to an API
    } else {
      console.log('Form is not valid');
    }
  }
}
