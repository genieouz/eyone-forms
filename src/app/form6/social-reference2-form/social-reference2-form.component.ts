import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-social-reference-form',
  templateUrl: './social-reference2-form.component.html',
  styleUrls: ['./social-reference2-form.component.scss']
})
export class SocialReference2FormComponent {
  socialReferenceForm: FormGroup;
  files: File[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private formService: FormService
  ) {
    this.socialReferenceForm = this.fb.group({
      referenceStructure: ['', Validators.required],
      clientName: ['', Validators.required],
      clientAge: ['', [Validators.required, Validators.min(0)]],
      clientSex: ['', Validators.required],
      clientAddress: ['', Validators.required],
      referenceReason: ['', Validators.required],
      socialInquirySummary: ['', Validators.required],
      actionsTaken: ['', Validators.required],
      referentContactPhone: ['', Validators.required],
      referentContactEmail: ['', [Validators.required, Validators.email]],
      madeAt: ['', Validators.required], // Fait à (lieu)
      date: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    this.files = event.target.files;
  }

  onSubmit(): void {
    if (this.socialReferenceForm.valid || true) {
      const formData = new FormData();
      for (const file of this.files) {
        formData.append('files', file, file.name);
      }

      // Ajouter les valeurs du formulaire au formData
      for (const key in this.socialReferenceForm.value) {
        formData.append(key, this.socialReferenceForm.value[key]);
      }

      // Exemple d'envoi du formData à une API
      this.formService.submitForm(formData, "").subscribe(
        response => console.log(response),
        error => console.error(error)
      );
    }
  }
}
