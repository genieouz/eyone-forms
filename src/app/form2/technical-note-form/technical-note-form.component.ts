import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-technical-note-form',
  templateUrl: './technical-note-form.component.html',
  styleUrls: ['./technical-note-form.component.scss']
})
export class TechnicalNoteFormComponent {
  form: FormGroup;

  constructor(private technicalNoteService: FormService) {
    this.form = new FormGroup({
      noteNumber: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      situationDescription: new FormControl('', Validators.required),
      situationAnalysis: new FormControl('', Validators.required),
      solutionsProposal: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.technicalNoteService.submitForm(this.form.value, "").subscribe(response => {
        // Traiter la réponse ici
      });
    }
  }
}
