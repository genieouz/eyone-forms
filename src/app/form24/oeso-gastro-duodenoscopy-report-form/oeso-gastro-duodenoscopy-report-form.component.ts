import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-oeso-gastro-duodenoscopy-report-form',
  templateUrl: './oeso-gastro-duodenoscopy-report-form.component.html',
  styleUrls: ['./oeso-gastro-duodenoscopy-report-form.component.scss']
})
export class OesoGastroDuodenoscopyReportFormComponent implements OnInit {
  oesoGastroDuodenoscopyReportForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.oesoGastroDuodenoscopyReportForm = this.fb.group({
      structure: ['', Validators.required],
      indication: [''],
      technique: [''],
      oesophagus: [''],
      cardia: [''],
      stomach: [''],
      pylorus: [''],
      duodenum: [''],
      gestures: [''],
      conclusion: [''],
      recommendations: ['']
    });
  }

  onSubmit(): void {
    console.log(this.oesoGastroDuodenoscopyReportForm.value);
    if (this.oesoGastroDuodenoscopyReportForm.valid) {
      // Envoyez les données du formulaire ici, par exemple à une API
    } else {
      console.log('Form is not valid');
    }
  }
}
