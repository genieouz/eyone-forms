import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vpa-report-form',
  templateUrl: './vpa-report-form.component.html',
  styleUrls: ['./vpa-report-form.component.scss']
})
export class VpaReportFormComponent implements OnInit {
  vpaReportForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vpaReportForm = this.fb.group({
      structure: ['', Validators.required],
      fileNumber: [''],
      vpaNumber: [''], // Assumant que "Date, numéro VPA" signifie un identifiant unique pour le VPA
      niup: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      maidenName: [''],
      birthdate: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      allergies: [''],
      date: ['', Validators.required],
      diagnosis: ['', Validators.required],
      intervention: [''],
      observations: [''],
      anesthesiaType: [''],
      conclusion: ['']
    });
  }

  onSubmit(): void {
    if (this.vpaReportForm.valid) {
      console.log('Form Data:', this.vpaReportForm.value);
      // Logique pour traiter la soumission du formulaire, comme envoyer les données à une API
    } else {
      console.error('Form is not valid');
    }
  }
}
