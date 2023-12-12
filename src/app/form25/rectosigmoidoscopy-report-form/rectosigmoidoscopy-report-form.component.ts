import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rectosigmoidoscopy-report-form',
  templateUrl: './rectosigmoidoscopy-report-form.component.html',
  styleUrls: ['./rectosigmoidoscopy-report-form.component.scss']
})
export class RectosigmoidoscopyReportFormComponent implements OnInit {
  rectosigmoidoscopyReportForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rectosigmoidoscopyReportForm = this.fb.group({
      structure: ['', Validators.required],
      indication: [''],
      inspection: [''],
      tr: [''],
      anuscopie: [''],
      rectosigmoidoscopy: [''],
      gestures: [''],
      conclusion: [''],
      recommendations: ['']
    });
  }

  onSubmit(): void {
    console.log(this.rectosigmoidoscopyReportForm.value);
    if (this.rectosigmoidoscopyReportForm.valid) {
      // Envoyez les données du formulaire ici, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }

  // Ajoutez des méthodes supplémentaires si nécessaire
}
