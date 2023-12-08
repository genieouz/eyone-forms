import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-operative-report-form',
  templateUrl: './operative-report-form.component.html',
  styleUrls: ['./operative-report-form.component.scss']
})
export class OperativeReportFormComponent {
  operativeReportForm: FormGroup;

  // Simuler la récupération de la liste des chirurgiens depuis une API
  surgeonsList = ['Chirurgien A', 'Chirurgien B', 'Chirurgien C'];

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.operativeReportForm = this.fb.group({
      dateOfAct: ['', Validators.required],
      NIUP: ['', Validators.required],
      entryChecklistCompleted: ['', Validators.required],
      patientName: ['', Validators.required],
      sex: ['', Validators.required],
      dateOfBirth: [''],
      estimatedAge: [''],
      clinicalSummary: ['', Validators.required],
      diagnosis: ['', Validators.required],
      indication: ['', Validators.required],
      principalSurgeon: ['', Validators.required],
      assistants: this.fb.array([]),
      instrumentalists: [''],
      anesthesiologists: [''],
      installation: [''],
      anesthesiaType: [''],
      intubationMode: [''],
      clampingTime: [''],
      CECtime: [''], // CEC stands for cardiopulmonary bypass time
      estimatedBloodLoss: [''],
      materialList: [''],
      approach: [''],
      explorations: [''],
      procedures: [''],
      incidentsAccidents: [''],
      drainage: [''],
      exitChecklistCompleted: ['', Validators.required],
      closure: [''],
      dressing: [''],
      startTime: [''],
      endTime: [''],
      postoperativeCare: [''],
      postoperativeOutcomes: [''],
      cytobacteriologicalStudy: [''],
      anatomopathologicalExamination: [''],
      // Autres champs à ajouter ici
    });
  }

  get assistants(): FormArray {
    return this.operativeReportForm.get('assistants') as FormArray;
  }

  addAssistant(): void {
    this.assistants.push(this.fb.control('', Validators.required));
  }

  onSubmit(): void {
    console.log(this.operativeReportForm.value);
    if (this.operativeReportForm.valid) {
      // Ici, envoyez les données du formulaire à votre API ou serveur
      this.formService.submitForm(this.operativeReportForm.value, "")
    }
  }
}
