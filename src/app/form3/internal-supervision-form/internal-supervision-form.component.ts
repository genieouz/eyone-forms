import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-internal-supervision-form',
  templateUrl: './internal-supervision-form.component.html',
  styleUrls: ['./internal-supervision-form.component.scss']
})
export class InternalSupervisionFormComponent {
  form: FormGroup;

  constructor(private internalSupervisionService: FormService) {
    this.form = new FormGroup({
      activityDate: new FormControl('', Validators.required),
      activityType: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      target: new FormControl('', Validators.required),
      beneficiariesNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      responsiblePersons: new FormControl('', Validators.required),
      activityProcess: new FormControl('', Validators.required),
      strengths: new FormControl('', Validators.required),
      weaknesses: new FormControl('', Validators.required),
      recommendations: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.internalSupervisionService.submitForm(this.form.value, "").subscribe(response => {
        // Traiter la réponse ici
      });
    }
  }
}
