import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anapath-report-form',
  templateUrl: './anapath-report-form.component.html',
  styleUrls: ['./anapath-report-form.component.scss']
})
export class AnapathReportFormComponent implements OnInit {
  anapathReportForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.anapathReportForm = this.fb.group({
      structure: ['', Validators.required],
      anapathNumber: ['', Validators.required],
      macroscopy: [''],
      microscopy: [''],
      immunohistochemistry: [''],
      conclusion: ['']
    });
  }

  onSubmit(): void {
    console.log(this.anapathReportForm.value);
    if (this.anapathReportForm.valid) {

      // Envoyez les données du formulaire ici, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }

  // Ajoutez des méthodes supplémentaires si nécessaire
}
