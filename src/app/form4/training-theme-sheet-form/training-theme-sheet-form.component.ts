import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-training-theme-sheet-form',
  templateUrl: './training-theme-sheet-form.component.html',
  styleUrls: ['./training-theme-sheet-form.component.scss']
})
export class TrainingThemeSheetFormComponent {
  form: FormGroup;

  constructor(private trainingThemeSheetService: FormService) {
    this.form = new FormGroup({
      activityDate: new FormControl('', Validators.required),
      theme: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      participants: new FormControl('', Validators.required),
      responsiblePersons: new FormControl('', Validators.required),
      trainingSupports: new FormControl('', Validators.required),
      evaluation: new FormControl('', Validators.required),
      recommendations: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.trainingThemeSheetService.submitForm(this.form.value, "").subscribe(response => {
        // Handle the response here
      });
    }
  }
}
