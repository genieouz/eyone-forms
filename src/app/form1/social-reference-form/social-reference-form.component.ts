import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { FormService } from '../../form.service';
import { SocialReferenceService } from './social-reference.service';

@Component({
  selector: 'app-social-reference-form',
  templateUrl: './social-reference-form.component.html',
  styleUrls: ['./social-reference-form.component.scss']
})
export class SocialReferenceFormComponent {
  form: FormGroup;
  showAutocomplete: boolean = false;
  filteredPatients: any[] = [];
  referenceReasons: any[] = [{ id: 1, name: "Option 1" }];
  constructor(
    private formService: FormService,
    private socialReferenceService: SocialReferenceService
  ) {
    this.form = new FormGroup({
      header: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      referenceStructure: new FormControl('', Validators.required),
      patientFullName: new FormControl('', Validators.required),
      patientId: new FormControl('', Validators.required),
      referenceReason: new FormControl('', Validators.required),
      referenceTime: new FormControl('', Validators.required),
      socialInquirySummary: new FormControl('', Validators.required),
      observations: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.socialReferenceService.getReferenceReasons().subscribe(data => {
      this.referenceReasons = data;
    });
  }




  onAddReferenceReason(): void {
    // Logique pour ajouter un nouveau motif de référence
  }

  onSearchPatient(event: Event): void {
    const value = (event.target as any).value
    if (value) {
      this.socialReferenceService.searchPatient(value).subscribe(
        patients => {
          this.filteredPatients = patients;
          this.showAutocomplete = true;
        },
        error => {
          // Handle error
        }
      );
    } else {
      this.filteredPatients = [];
      this.showAutocomplete = false;
    }
  }

  hideAutocomplete(): void {
    // You might want to delay hiding to allow for item selection
    setTimeout(() => this.showAutocomplete = false, 300);
  }

  selectPatient(patient: any): void {
    (this.form.get('patientFullName') as any).setValue(patient.name);
    this.showAutocomplete = false;
  }

  onAddPatient(): void {
    // Logique pour ajouter un nouveau patient
  }

  onSubmit() {
    if (this.form.valid) {
      this.formService.submitForm(this.form.value, "").subscribe(response => {
        // Handle response here
      });
    }
  }
}
