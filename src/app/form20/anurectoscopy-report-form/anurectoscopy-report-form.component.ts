import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anurectoscopy-report-form',
  templateUrl: './anurectoscopy-report-form.component.html',
  styleUrls: ['./anurectoscopy-report-form.component.scss']
})
export class AnurectoscopyReportFormComponent implements OnInit {
  anurectoscopyReportForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.anurectoscopyReportForm = this.fb.group({
      structure: ['', Validators.required],
      indication: [''],
      inspection: [''],
      anuscopie: [''],
      rectoscopie: [''],
      tr: [''],
      gestes: [''],
      conclusion: [''],
      recommendations: ['']
    });
  }

  onSubmit(): void {
    console.log(this.anurectoscopyReportForm.value);
    if (this.anurectoscopyReportForm.valid) {

      // Envoyez les données du formulaire ici, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }

  // Ajoutez des méthodes supplémentaires si nécessaire
}
