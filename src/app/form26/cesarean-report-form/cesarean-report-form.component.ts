import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cesarean-report-form',
  templateUrl: './cesarean-report-form.component.html',
  styleUrls: ['./cesarean-report-form.component.scss']
})
export class CesareanReportFormComponent implements OnInit {
  cesareanReportForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cesareanReportForm = this.fb.group({
      structure: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,}$/)]],
      operator: ['', Validators.required],
      assistant: [''],
      anesthetist: ['', Validators.required],
      roomNumber: ['', Validators.required],
      gestityParity: [''],
      gestationalAge: [''],
      // Supposons que vous avez un champ pour SA et un autre pour les jours
      gestationalAgeSA: ['', Validators.pattern(/^\d+$/)],
      gestationalAgeDays: ['', Validators.pattern(/^\d+$/)],
      indication: ['', Validators.required],
      anesthesiaType: [''],
      abdominalIncisionType: [''],
      abdominalCavityAspect: [''],
      hysterotomyType: [''],
      amnioticFluidAspect: [''],
      extractionType: [''],
      babySex: [''],
      babyWeight: ['', [Validators.pattern(/^\d+(\.\d+)?$/)]], // pattern pour un poids valide
      apgarScore: ['', [Validators.min(0), Validators.max(10)]], // APGAR varie de 0 à 10
      deliveryType: [''],
      uterineRevision: [''],
      hysterotomySutureType: [''],
      sutureThreadType: [''],
      hemostasisQuality: [''],
      visceralPeritoneumSuture: [''],
      parietalPeritoneumClosure: [''],
      subcutaneousTissue: [''],
      skin: [''],
      parietalPeritoneum: ['', Validators.required],
      aponeurosis: ['', Validators.required],
      drainage: [false], // Booléen pour oui ou non
      difficulties: [''],
      duration: ['', [Validators.pattern(/^\d+$/)]], // suppose que la durée est en minutes
      bloodLoss: ['', [Validators.pattern(/^\d+(\.\d+)?$/)]], // pattern pour une valeur numérique valide
      oxytocics: [false],
      analgesics: [false],
      transfusion: [false],
      antibiotics: [false],
      numberFlasks: ['', [Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit(): void {
    console.log('Form Data: ', this.cesareanReportForm.value);
    if (this.cesareanReportForm.valid) {
      // Vous pourriez envoyer les données à un service ou effectuer d'autres actions ici
    } else {
      console.error('Form is not valid');
    }
  }
}
