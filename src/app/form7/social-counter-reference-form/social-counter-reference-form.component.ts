import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialCounterReferenceService } from './social-counter-reference.service';

@Component({
  selector: 'app-social-counter-reference-form',
  templateUrl: './social-counter-reference-form.component.html',
  styleUrls: ['./social-counter-reference-form.component.scss']
})
export class SocialCounterReferenceFormComponent {
  form: FormGroup;
  selectedFiles: any;

  constructor(private service: SocialCounterReferenceService) {
    this.form = new FormGroup({
      referenceStructureId: new FormControl('', Validators.required),
      welcomingStructure: new FormControl('', Validators.required),
      receptionDateAndTime: new FormControl('', Validators.required),
      interventions: new FormControl('', Validators.required),
      madeAt: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      attachments: new FormControl('', Validators.required),
    });
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('attachments', this.selectedFiles.item(i));
      }

      // Ajoutez les autres données de formulaire à formData
      Object.keys(this.form.controls).forEach(key => {
        if (key !== 'attachments') { // On ne veut pas ajouter les fichiers deux fois
          formData.append(key, (this.form as any).get(key).value);
        }
      });

      this.service.submitSocialCounterReference(formData).subscribe(
        response => console.log(response),
        error => console.error(error)
      );
    }
  }
}
