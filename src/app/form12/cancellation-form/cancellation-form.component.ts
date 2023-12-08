import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancellation-form',
  templateUrl: './cancellation-form.component.html',
  styleUrls: ['./cancellation-form.component.scss'] // Si vous avez un fichier CSS associé
})
export class CancellationFormComponent implements OnInit {
  cancellationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cancellationForm = this.fb.group({
      niup: ['', Validators.required],
      patient: ['', Validators.required],
      serviceProvider: ['', Validators.required],
      billingDate: ['', Validators.required],
      receiptNumber: ['', Validators.required],
      cancellationReason: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.cancellationForm.value);
    if (this.cancellationForm.valid) {
      // Ici vous pouvez appeler une API pour soumettre les données du formulaire
    } else {
      console.log('Form is not valid');
    }
  }

  // Ajoutez des méthodes supplémentaires si nécessaire
}
