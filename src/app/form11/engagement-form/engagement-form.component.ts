import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-engagement-form',
  templateUrl: './engagement-form.component.html',
  styleUrls: ['./engagement-form.component.scss'] // Si vous avez un fichier CSS associé
})
export class EngagementFormComponent {
  engagementForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.engagementForm = this.fb.group({
      structure: ['', Validators.required],
      title: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      identityNumber: ['', Validators.required],
      hospitalizationExpenses: ['', Validators.required],
      dossierNumber: ['', Validators.required],
      niup: ['', Validators.required],
      admissionDate: ['', Validators.required],
      dischargeDate: ['', Validators.required],
      amountInWords: ['', Validators.required],
      amountDue: ['', Validators.required],
      amountPaid: ['', Validators.required],
      balance: ['', Validators.required],
      agreementInfo: ['', Validators.required],
      // Ajoutez d'autres contrôles de formulaire ici si nécessaire
    });
  }

  onSubmit(): void {
    console.log(this.engagementForm.value);
    if (this.engagementForm.valid) {
      // Ici vous pouvez appeler une API pour soumettre les données du formulaire
    } else {
      console.log('Form is not valid');
    }
  }

  // Ajoutez des méthodes supplémentaires si nécessaire
}
