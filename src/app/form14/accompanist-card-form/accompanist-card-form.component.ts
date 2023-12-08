import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accompanist-card-form',
  templateUrl: './accompanist-card-form.component.html',
  styleUrls: ['./accompanist-card-form.component.scss']
})
export class AccompanistCardFormComponent implements OnInit {
  accompanistCardForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.accompanistCardForm = this.fb.group({
      structure: ['', Validators.required],
      service: ['', Validators.required],
      photo: [null, Validators.required],
      niup: ['', Validators.required],
      patientName: ['', Validators.required],
      admissionDate: ['', Validators.required],
      servicePavilion: ['', Validators.required],
      bedNumber: ['', Validators.required],
      accompanistName: ['', Validators.required],
      idPassportNumber: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      relationship: ['', Validators.required],
      expirationDate: ['', Validators.required],
      substitutes: [''] // Ce champ est facultatif, donc pas de validateur requis
    });
  }

  onFileChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      this.accompanistCardForm.patchValue({
        photo: fileList[0]
      });
    }
  }

  onSubmit(): void {
    console.log(this.accompanistCardForm.value)
    if (this.accompanistCardForm.valid || true) {
      // Vous pouvez ici utiliser FormData pour envoyer votre fichier si nécessaire
      const formData = new FormData();
      formData.append('photo', this.accompanistCardForm.get('photo').value);
      formData.append('data', JSON.stringify(this.accompanistCardForm.value));

      console.log(formData)
    } else {
      console.log('Form is not valid');
    }
  }
}
